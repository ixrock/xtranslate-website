"use client";

import styles from './Icon.module.css';
import React from "react";
import classNames from "classnames";

export interface IconProps extends React.PropsWithChildren {
  className?: string;
  small?: boolean;
  big?: boolean;
  svgStroke?: boolean;
  svgFill?: boolean;
  onClick?: (evt: React.MouseEvent) => void;
}

export function Icon({ className, small, big, onClick, svgFill, svgStroke, children }: IconProps) {
  const classes = classNames(styles.Icon, className, {
    [styles.small]: small,
    [styles.big]: big,
    [styles.svgStroke]: svgStroke,
    [styles.svgFill]: svgFill,
  });
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  )
}