"use client";

import styles from "./photo-preview.module.css"
import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface PhotoPreviewProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  onClick?: (evt: React.MouseEvent) => void;
}

export function PhotoPreview(props: PhotoPreviewProps) {
  const { src, className = "", alt, title = alt, onClick } = props;

  return (
    <>
      <Link className={`${styles.PhotoPreview} ${className}`} href={src} onClick={onClick}>
        <Image
          priority
          src={src}
          width={1280}
          height={800}
          title={title}
          alt={alt}
        />
      </Link>
    </>
  )
}

export default PhotoPreview;