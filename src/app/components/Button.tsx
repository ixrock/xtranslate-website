"use client";

import styles from './Button.module.css';
import React, { HTMLAttributeAnchorTarget } from 'react';
import classNames from "classnames";

export type ButtonElement = HTMLButtonElement | HTMLAnchorElement;

export interface ButtonProps extends React.PropsWithChildren, React.HTMLAttributes<ButtonElement> {
  className?: string;
  href?: string; // create a link <a> instead of <button>
  target?: HTMLAttributeAnchorTarget;
  flat?: boolean;
}

export function Button({ className, flat, ...props }: ButtonProps) {
  const classes = classNames(styles.Button, className, {
    [styles.flat]: flat,
  });

  if (props.href) {
    return <a {...props} className={classes}/>
  }

  return (
    <button {...props} className={classes}/>
  )
}