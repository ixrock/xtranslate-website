"use client";

import styles from "./photo-preview.module.css"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LoadingIndicator } from "@/app/components/loading-indicator";
import { Dialog } from "@/app/components/dialog";

export interface PhotoPreviewClientProps {
  src: string;
  className?: string;
  alt?: string;
}

// TODO: add rotation with Arrow-keys + single Dialog for handing all photos
export default function PhotoPreview(props: PhotoPreviewClientProps) {
  const { src, className, alt: title } = props;
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
          fill={true}
          className={className}
          alt={String(title)}
        />
      </Link>
      {showPreview && (
        <Dialog onClose={() => showPreviewActivate(false)}>
          {!imageReady && <LoadingIndicator/>}
          {imageReady && (
            <div className={styles.PhotoPreviewClientImage}>
              <Image src={src} fill alt={title as string}/>
            </div>
          )}
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
