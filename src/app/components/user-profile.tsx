"use client";

import type { User } from "next-auth";
import styles from './user-profile.module.css';
import { signIn } from "next-auth/react";

export interface UserProfileProps {
  className?: string;
  user?: User;
}

export function UserProfile({ className, user }: UserProfileProps) {
  return (
    <div className={`${styles.UserProfile} ${className}`}>
      {user && (
        <div className={`${styles.user} flex gaps align-center`}>
          <span className={styles.userName}>{user?.name}</span>
          {user?.image && <div className={styles.userPhoto} style={{ backgroundImage: `url(${user?.image})` }}/>}
          {!user?.image && <div className={styles.avatar}/>}
        </div>
      )}
      {!user && <div className={styles.avatar} onClick={() => signIn()}/>}
    </div>
  )
}
