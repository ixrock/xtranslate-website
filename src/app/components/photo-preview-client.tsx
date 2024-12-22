"use client";

import styles from "./photo-preview.module.css"
import React, { useState } from "react";
import type sharp from "sharp";
import Link from "next/link";
import Image from "next/image";
import { LoadingIndicator } from "@/app/components/loading-indicator";
import { Dialog } from "@/app/components/dialog";

export interface PhotoPreviewClientProps {
  src: string;
  width: number;
  height: number;
  className?: string;
  metadata: Partial<sharp.Metadata>;
  alt?: string;
}

export default function PhotoPreviewClient(props: PhotoPreviewClientProps) {
  const { src, className, width, height, metadata, alt: title } = props;
  const [showPreview, showPreviewActivate] = useState(false);
  const [imageReady, setImageReady] = useState(false);

  const onClick = async (evt: React.MouseEvent) => {
    evt.preventDefault();
    showPreviewActivate(true);
    await preloadImage(src);
    setImageReady(true);
  };

  return (
    <>
      <Link
        href={src}
        className={styles.PhotoPreviewClient}
        onClick={onClick}
      >
        <Image
          src={src}
          className={`${styles.PhotoPreviewClientImage} ${className}`}
          width={width}
          height={height}
          alt={String(title)}
        />
      </Link>
      {showPreview && (
        <Dialog onClose={() => showPreviewActivate(false)}>
          {!imageReady && <LoadingIndicator/>}
          {imageReady && <Image src={src} width={metadata.width} height={metadata.height} alt=""/>}
          {title && <p className={styles.PhotoPreviewClientTitle}>{title}</p>}
        </Dialog>
      )}
    </>
  )
}

export async function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}
