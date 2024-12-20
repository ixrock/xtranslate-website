"use client";

import styles from './dialog.module.css';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface DialogProps extends React.PropsWithChildren<{}> {
  showCloseBtn?: boolean;
  onClose?: () => void;
}

export function Dialog({ children, onClose, showCloseBtn = true }: DialogProps) {
  const [domReady, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  useEffect(() => {
    const onEscapeKey = ({ code }: KeyboardEvent) => {
      if (code === "Escape") onClose?.();
    };

    const onClickOutside = ({ target }: MouseEvent) => {
      const elem = target as HTMLElement;
      if (elem.classList.contains(styles.DialogContent)) {
        onClose?.();
      }
    };

    document.addEventListener("keyup", onEscapeKey);
    document.addEventListener("click", onClickOutside);

    return () => {
      document.removeEventListener("keyup", onEscapeKey);
      document.removeEventListener("click", onClickOutside);
    };
  }, []);

  const dialog = (
    <div className={styles.Dialog}>
      <div className={styles.DialogContent}>
        {showCloseBtn && (
          <span className={styles.closeBtn} onClick={onClose}>&times;</span>
        )}
        {children}
      </div>
    </div>
  );

  return domReady ? createPortal(dialog, document.body) : null;
}
