import styles from './rating.module.css';
import React from 'react';

export interface RatingProps {
  className?: string;
  value: number; /* rating from 1 to 5 */
}

export function Rating(props: RatingProps) {
  const { value, className = "" } = props;

  const cssVars = {
    "--rate": value,
  } as React.CSSProperties;

  return (
    <div className={`${styles.rating} ${className}`}>
      <div className={styles.stars}/>
      <div className={`${styles.stars} ${styles.active}`} style={cssVars}/>
    </div>
  );
}
