"use client";

import styles from "./photo-previews.module.css"
import React from "react";
import { action, runInAction } from "mobx";
import { observer, useLocalObservable } from "mobx-react";
import Image from "next/image";
import { LoadingIndicator } from "@/app/components/loading-indicator";
import { Dialog } from "@/app/components/dialog";
import PhotoPreview, { PhotoPreviewProps } from "@/app/components/photo-preview";

export interface PhotoPreviewsProps {
  images: PhotoPreviewProps[];
}

export const PhotoPreviews = observer(({ images }: PhotoPreviewsProps) => {
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

  return (
    <div className={styles.PhotoPreviews}>
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
          onLeft={() => nextImage(-1)}
          onRight={() => nextImage(+1)}
          onClose={closeDialog}
        >
          {!store.imageReady && <LoadingIndicator/>}
          {store.imageReady && (
            <>
              <div className={styles.PhotoPreviewImage}>
                <Image src={imageSrc} fill alt={imageTitle}/>
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
