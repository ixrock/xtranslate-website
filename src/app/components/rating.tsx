import styles from './rating.module.css';
import React from 'react';

export interface RatingProps {
  className?: string;
  rateValue: number; /* rating from 1 to 5 */
  totalRatingsCount: number | string; /* e.g. 1.5K */
}

export function Rating(props: RatingProps) {
  const { rateValue, totalRatingsCount, className = "" } = props;
  const starsContent = "★".repeat(5);

  const cssVars = {
    "--rate": rateValue,
  } as React.CSSProperties;

  return (
    <div className={`${styles.rating} ${className}`}>
      <div className={styles.rateValue}>{rateValue}</div>
      <div className={styles.starsWrapper}>
        <div className={styles.star}>{starsContent}</div>
        <div className={`${styles.star} ${styles.active}`} style={cssVars}>{starsContent}</div>
      </div>
      <div className={styles.totalReviews}>
        (from <b>{totalRatingsCount}</b>{" "}
        <a href="https://chromewebstore.google.com/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo/reviews" target="_blank">ratings</a>)
      </div>
    </div>
  );
}
