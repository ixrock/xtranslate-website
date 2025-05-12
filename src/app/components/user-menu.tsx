"use client";

import type { User } from "next-auth";
import styles from './user-menu.module.css';
import { signIn, signOut } from "next-auth/react";
import { Icon } from "@/app/components/icon";

export interface UserMenuProps {
  className?: string;
  user?: User;
}

export function UserMenu({ className, user }: UserMenuProps) {
  return (
    <div className={`${styles.UserMenu} ${className}`}>
      <div className={`${styles.user} flex gaps align-center`}>
        {user && (
          <>
            <span className={`${styles.userName}`}>{user.name}</span>
            {user.image && <span className={styles.userPhoto} style={{ backgroundImage: `url(${user.image})` }}/>}
            {!user.image && <Icon className={styles.avatar}/>}
          </>
        )}
        {!user && (
          <div className="flex gaps align-center" onClick={() => signIn()}>
            <span>Login</span>
            <Icon className={styles.avatar}/>
          </div>
        )}
      </div>
      {user && (
        <ul className={styles.userDropdown}>
          <li>Billing</li>
          <li onClick={() => signIn()}>Link Account</li>
          <li onClick={() => signOut()}><small>({user.email})</small> Logout</li>
        </ul>
      )}
    </div>
  )
}
