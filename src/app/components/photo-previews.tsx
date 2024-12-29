"use client";

import styles from "./photo-previews.module.css"
import React from "react";
import { action, runInAction } from "mobx";
import { observer, useLocalObservable } from "mobx-react";
import Image from "next/image";
import { LoadingIndicator, Dialog, PhotoPreview, PhotoPreviewProps } from "@/app/components";

export interface PhotoPreviewsProps {
  className?: string;
  images: PhotoPreviewProps[];
}

export const PhotoPreviews = observer(({ images, className }: PhotoPreviewsProps) => {
  const store = useLocalObservable(() => ({
    imageReady: false,
    photoIndex: -1,
  }));

  const { src: imageSrc, alt: imageTitle } = images[store.photoIndex] ?? {};

  async function preloadImageAndSetActiveIndex(src: string) {
    const index = images.findIndex(item => item.src === src);
    runInAction(() => {
      store.imageReady = false;
      store.photoIndex = index;
    })
    await preloadImage(src);
    runInAction(() => {
      store.imageReady = true;
    })
  }

  function onImageClick(evt: React.MouseEvent, imageSrc: string) {
    evt.preventDefault(); // prevent link clicking
    void preloadImageAndSetActiveIndex(imageSrc);
  }

  function closeDialog() {
    runInAction(() => store.photoIndex = -1);
  }

  const nextImage = action((direction: number) => {
    let newIndex = store.photoIndex + Math.sign(direction);

    if (newIndex > images.length - 1) {
      newIndex = 0; // go to first image
    } else if (newIndex <= -1) {
      newIndex = images.length - 1; // go to last image in rotation
    }

    store.photoIndex = newIndex;
  });

  const showPrevImage = () => nextImage(-1);
  const showNextImage = () => nextImage(+1);

  return (
    <div className={`${styles.PhotoPreviews} ${className ?? ""}`}>
      {images.map((props, index) => {
        return (
          <PhotoPreview
            {...props}
            key={props.src}
            className={styles.PhotoPreview}
            onClick={evt => onImageClick(evt, props.src)}
          />
        )
      })}
      {imageSrc && (
        <Dialog
          contentClassName={styles.PhotoPreviewContent}
          onLeft={showPrevImage}
          onRight={showNextImage}
          onClose={closeDialog}
        >
          {!store.imageReady && <LoadingIndicator/>}
          {store.imageReady && (
            <>
              <div className={styles.PhotoPreviewImageBig}>
                <i className={`${styles.PhotoRotateArrow} ${styles.left}`} onClick={showPrevImage}/>
                <Image fill src={imageSrc} alt={imageTitle}/>
                <i className={`${styles.PhotoRotateArrow} ${styles.right}`} onClick={showNextImage}/>
              </div>
              <div className={styles.PhotoPreviewTitle}>
                {imageTitle}
              </div>
            </>
          )}
        </Dialog>
      )}
    </div>
  )
});

export async function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

export default PhotoPreviews;
