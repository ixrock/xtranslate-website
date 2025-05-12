import styles from './icon.module.css';
import React from "react";

export interface IconProps extends React.PropsWithChildren {
  className?: string;
  onClick?: (evt: React.MouseEvent) => void;
}

export function Icon({ className, onClick, children }: IconProps) {
  return (
    <div className={`${styles.Icon} ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}