"use client";

import styles from "./photo-preview.module.css"
import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface PhotoPreviewProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: (evt: React.MouseEvent) => void;
}

export default function PhotoPreview(props: PhotoPreviewProps) {
  const { src, className, alt, onClick } = props;

  return (
    <>
      <Link className={styles.PhotoPreview} href={src} onClick={onClick}>
        <Image
          src={src}
          className={className}
          width={1280}
          height={800}
          alt={alt}
        />
      </Link>
    </>
  )
}
