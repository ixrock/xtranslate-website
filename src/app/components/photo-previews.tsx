"use client";

import styles from "./photo-previews.module.css"
import React, { useState } from "react";
import Image from "next/image";
import { Dialog, LoadingIndicator, PhotoPreview, PhotoPreviewProps } from "@/app/components";

export interface PhotoPreviewsProps {
  className?: string;
  images: PhotoPreviewProps[];
}

// TODO: maybe use parallel routes
//  see: https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
export function PhotoPreviews({ images, className }: PhotoPreviewsProps) {
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
    <div className={`${styles.PhotoPreviews} ${className ?? ""}`}>
      {images.map((props, index) => {
        return (
          <PhotoPreview
            {...props}
            key={props.src}
            className={styles.PhotoPreview}
            onClick={evt => onImageClick(evt, index)}
          />
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
                <Image fill src={photo.src} alt={photo.title ?? ""}/>
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

export default PhotoPreviews;
