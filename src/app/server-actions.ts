"use server";

import fs from "fs"
import path from "path"
import sharp from "sharp"

export async function publicFolderPath() {
  return path.join(process.cwd(), 'public');
}

export interface FileListing {
  fileName: string; // optional in case if it's a folder
  publicPath: string; // relative to "/public"
  metadata: sharp.Metadata;
}

export interface FileListOptions {
  withMetadata?: boolean; // use "sharp" metadata to get real image dimensions (default: true)
}

export async function getFilesList(publicPath: string, opts: FileListOptions = {}): Promise<FileListing[]> {
  const {
    withMetadata = true,
  } = opts;
  const fullPath = path.join(await publicFolderPath(), publicPath);
  const files = await fs.promises.readdir(fullPath);
  const onlyFiles = files.filter(file => fs.lstatSync(path.join(fullPath, file)).isFile());

  const metadata = withMetadata ? await Promise.all(
    onlyFiles.map(fileName => getImageMetadata(path.join(publicPath, fileName)))
  ) : [];

  return onlyFiles.map((fileName, index) => {
    return {
      fileName,
      publicPath: path.join("/", publicPath, fileName),
      metadata: metadata[index] ?? {},
    }
  });
}

export async function getImageMetadata(publicPath: string): Promise<sharp.Metadata> {
  const fullPath = path.join(await publicFolderPath(), publicPath,);

  return sharp(fullPath).metadata();
}
