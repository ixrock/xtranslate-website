"use client";

import styles from './Dialog.module.css';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface DialogProps extends React.PropsWithChildren<{}> {
  className?: string;
  contentClassName?: string;
  showCloseBtn?: boolean;
  onClose?: () => void;
  onLeft?: () => void;
  onRight?: () => void;
}

export function Dialog(props: DialogProps) {
  const {
    children,
    showCloseBtn = true,
    className = "",
    contentClassName = "",
    onClose, onLeft, onRight,
  } = props;
  const [domReady, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  useEffect(() => {
    const onKeyUp = ({ code }: KeyboardEvent) => {
      if (code === "Escape") onClose?.();
      if (code === "ArrowLeft") onLeft?.();
      if (code === "ArrowRight") onRight?.();
    };

    const onClickOutside = ({ target }: MouseEvent) => {
      const elem = target as HTMLElement;
      if (elem.classList.contains(styles.DialogContent)) {
        onClose?.();
      }
    };

    document.addEventListener("keyup", onKeyUp);
    document.addEventListener("click", onClickOutside);

    return () => {
      document.removeEventListener("keyup", onKeyUp);
      document.removeEventListener("click", onClickOutside);
    };
  }, [onLeft, onRight, onClose]);

  const dialog = (
    <div className={`${styles.Dialog} ${className}`}>
      <div className={`${styles.DialogContent} ${contentClassName}`}>
        {showCloseBtn && (
          <span className={styles.closeBtn} onClick={onClose}>&times;</span>
        )}
        {children}
      </div>
    </div>
  );

  return domReady ? createPortal(dialog, document.body) : null;
}
