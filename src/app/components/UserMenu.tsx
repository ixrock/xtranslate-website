"use client";

import styles from './UserMenu.module.css';
import type { User } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import { Icon } from "@/app/components/Icon";

export interface UserMenuProps {
  user?: User;
}

export function UserMenu({ user: initialUser }: UserMenuProps) {
  const { data: session, status } = useSession();
  const user = session?.user ?? initialUser;
  const isLoading = status === "loading";

  return (
    <div className={styles.UserMenu}>
      <label className={`${styles.user} flex gaps align-center`} tabIndex={0}>
        <input type="checkbox"/>
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
      </label>
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
