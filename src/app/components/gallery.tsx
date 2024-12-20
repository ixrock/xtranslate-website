import styles from "./gallery.module.css"
import React from "react";
import type { FileListing } from "@/app/utils/server-actions";
import Link from "next/link";
import PhotoPreview from "@/app/components/photo-preview";

export interface GalleryProps {
  files: FileListing[];
  outputWidth?: number; /* default: 250 */
}

export default function Gallery(props: GalleryProps) {
  const { files, outputWidth = 250 } = props;

  return (
    <div className={styles.gallery}>
      {files.map((({ publicPath, metadata }) => {
        return (
          <PhotoPreview
            className={styles.image}
            key={publicPath}
            src={publicPath}
            metadata={metadata}
            previewWidth={outputWidth}
          />
        )
      }))}
    </div>
  )
}

export interface GalleryPreviewProps {
  header: React.ReactNode;
  files: FileListing[];
  detailsUrl?: string;
  previewCount?: number; /* default: 5 */
}

export function GalleryPreview(props: GalleryPreviewProps) {
  const { files, previewCount = 5, header, detailsUrl } = props;
  return (
    <>
      <h1>{header}</h1>
      <Gallery files={files.slice(0, previewCount)}/>
      {detailsUrl && (
        <div className={styles.showAll}>
          <Link href={detailsUrl}>Show all &rarr;</Link>
        </div>
      )}
    </>
  )
}
