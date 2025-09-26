import styles from './StarRating.module.css';
import React from 'react';

export interface StarRatingProps {
  className?: string;
  value: number; // from 0 to 5, can be fractional like 4.5
}

export function StarRating(props: StarRatingProps) {
  const { value, className = "" } = props;

  const valuePercent = Math.round((value / 5) * 100);
  const cssVars = {
    "--rateInPercent": `${valuePercent}%`
  } as React.CSSProperties;

  return (
    <div
      className={`${styles.StarRating} ${className}`}
      style={cssVars}
    />
  );
}
