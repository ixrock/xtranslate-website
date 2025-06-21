"use client";

import styles from './Button.module.css';
import React from 'react';
import classNames from "classnames";
import Link, { LinkProps } from "next/link";

export interface ButtonProps {
  className?: string;
  flat?: boolean;
  asLink?: boolean;
}

export function Button(props: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, asLink, flat, ...btnProps } = props
  return (
    <button {...btnProps} className={getButtonClass(props)}/>
  );
}

export function ButtonLink(props: Omit<ButtonProps, "asLink"> & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { className, flat, ...linkProps } = props;
  return (
    <Link
      scroll={false}
      {...linkProps}
      className={getButtonClass(props)}
      role="button"
    />
  )
}

export function getButtonClass({ className, flat, asLink }: ButtonProps) {
  return classNames(styles.Button, className, {
    [styles.flatTheme]: flat,
    [styles.linkTheme]: asLink,
  });
}
