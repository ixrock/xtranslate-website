"use client";

import styles from "./PhotoGallery.module.css"
import React, { useState } from "react";
import { Dialog, LoadingIndicator } from "@/app/components";
import Link from "next/link";

export interface PhotoPreview {
  src: string;
  title: string;
}

export interface PhotoPreviewsProps {
  className?: string;
  images: PhotoPreview[];
}

// TODO: maybe use parallel routes, https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
export function PhotoGallery({ images, className }: PhotoPreviewsProps) {
  const [imageReady, setReady] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(-1);
  const photo = images[photoIndex];

  const showPrevImage = () => showImage(photoIndex - 1);
  const showNextImage = () => showImage(photoIndex + 1);
  const closeDialog = () => setPhotoIndex(-1);

  async function showImage(index: number) {
    let newIndex = index;
    if (newIndex < 0) newIndex = images.length - 1; // last
    if (newIndex > images.length - 1) newIndex = 0; // first

    setReady(false);
    await preloadImage(images[newIndex].src);
    setReady(true);
    setPhotoIndex(newIndex)
  }

  function onImageClick(evt: React.MouseEvent, index: number) {
    evt.preventDefault(); // prevent link clicking
    void showImage(index);
  }

  return (
    <div className={`${styles.PhotoGallery} ${className ?? ""}`}>
      {images.map(({ src, title }, index) => {
        return (
          <Link key={src} className={styles.PhotoPreview} href={src} onClick={evt => onImageClick(evt, index)} prefetch={false}>
            <img src={src} title={title} alt={title}/>
          </Link>
        )
      })}
      {photo && (
        <Dialog
          contentClassName={styles.PhotoPreviewContent}
          onLeft={showPrevImage}
          onRight={showNextImage}
          onClose={closeDialog}
        >
          {!imageReady && <LoadingIndicator/>}
          {imageReady && (
            <>
              <div className={styles.PhotoPreviewImageBig}>
                <i className={`${styles.PhotoRotateArrow} ${styles.left}`} onClick={showPrevImage}/>
                <img src={photo.src} alt={photo.title}/>
                <i className={`${styles.PhotoRotateArrow} ${styles.right}`} onClick={showNextImage}/>
              </div>
              <div className={styles.PhotoPreviewTitle}>
                {photo.title}
              </div>
            </>
          )}
        </Dialog>
      )}
    </div>
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

export default PhotoGallery;
