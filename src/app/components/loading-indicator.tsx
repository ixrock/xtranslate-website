import styles from './loading-indicator.module.css';
import React from 'react';

export function LoadingIndicator() {
  return (
    <span className={styles.loader}></span>
  )
}
