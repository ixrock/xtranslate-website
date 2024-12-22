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
          fill={true}
          className={className}
          sizes="1280px,800px"
          alt={alt}
        />
      </Link>
    </>
  )
}
