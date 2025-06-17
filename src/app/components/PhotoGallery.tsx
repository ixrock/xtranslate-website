"use client";

import styles from "./PhotoGallery.module.css"
import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { Dialog, LoadingIndicator } from "@/app/components";

export interface PhotoPreviewsProps extends React.PropsWithChildren {
  className?: string;
}

// TODO: maybe use parallel routes, https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
export function PhotoGallery({ className, children }: PhotoPreviewsProps) {
  const [imageReady, setReady] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(-1);

  const reactElements = React.Children.toArray(children) as React.ReactElement<HTMLImageElement>[];
  const images = reactElements
    .filter(img => React.isValidElement(img) && img.type === "img")
    .map(({ props: { src, alt } }) => ({ src, title: alt }));

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
    <div className={classNames(styles.PhotoGallery, className)}>
      {images.map(({ src, title }, index) => {
        return (
          <Link key={src} className={styles.PhotoPreview} href={src} onClick={evt => onImageClick(evt, index)} prefetch={false}>
            <img src={src} title={title} alt={title} loading="lazy"/>
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
                <img src={photo.src} alt={photo.title} loading="lazy"/>
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
