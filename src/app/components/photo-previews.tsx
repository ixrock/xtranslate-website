"use client";

import styles from "./photo-previews.module.css"
import React, { useState } from "react";
import Image from "next/image";
import { Dialog, LoadingIndicator, PhotoPreview, PhotoPreviewProps } from "@/app/components";

export interface PhotoPreviewsProps {
  className?: string;
  images: PhotoPreviewProps[];
}

// TODO: maybe use parallel routes, see: https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
export function PhotoPreviews({ images, className }: PhotoPreviewsProps) {
  const [imageReady, setReady] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(-1);
  const photo = images[photoIndex];

  const showPrevImage = () => rotateImages(-1);
  const showNextImage = () => rotateImages(+1);
  const closeDialog = () => setPhotoIndex(-1);

  function rotateImages(step: number) {
    setPhotoIndex(prevIndex => {
      let newIndex = prevIndex + step;

      if (newIndex > images.length - 1) {
        newIndex = 0; // first
      } else if (newIndex < 0) {
        newIndex = images.length - 1; // last
      }

      return newIndex;
    });
  }

  async function onImagePreview(evt: React.MouseEvent, imageSrc: string) {
    evt.preventDefault(); // prevent link clicking

    const imageIndex = images.findIndex(item => item.src === imageSrc);
    setPhotoIndex(imageIndex);
    setReady(false);

    await preloadImage(imageSrc);
    setReady(true);
  }

  return (
    <div className={`${styles.PhotoPreviews} ${className ?? ""}`}>
      {images.map((props, index) => {
        return (
          <PhotoPreview
            {...props}
            key={props.src}
            className={styles.PhotoPreview}
            onClick={evt => onImagePreview(evt, props.src)}
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
