import styles from "./photo-preview.module.css"
import React from "react";
import sharp from "sharp";
import { getImageMetadata } from "../utils/server-actions";
import { resizeByWidth } from "../utils/resizeBy";
import PhotoPreviewClient from "./photo-preview-client";

export interface PhotoPreviewProps {
  src: string;
  className?: string;
  previewWidth?: number; /* default: 250 */
  metadata?: sharp.Metadata;
  alt?: string;
}

export default async function PhotoPreview(props: PhotoPreviewProps) {
  const { src, className, previewWidth = 250, metadata, alt } = props;

  const { width, height } = metadata ?? await getImageMetadata(src);
  const [newWidth, newHeight] = resizeByWidth({
    width: width!,
    height: height!,
    newSize: previewWidth
  });

  return (
    <div className={styles.PhotoPreview}>
      <PhotoPreviewClient
        src={src}
        width={newWidth}
        height={newHeight}
        className={className}
        metadata={{ width, height }}
        alt={alt}
      />
    </div>
  )
}
