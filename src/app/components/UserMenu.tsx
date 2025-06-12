"use client";

import styles from './UserMenu.module.css';
import { signIn, signOut, useSession } from "next-auth/react";
import { Icon } from "@/app/components/Icon";

export function UserMenu() {
  const { data: session } = useSession();
  const { name: userName, image: avatarUrl, email } = session?.user ?? {};

  return (
    <div className={styles.UserMenu}>
      <label className={`${styles.user} flex gaps align-center`} tabIndex={0}>
        <input type="checkbox"/>
        {userName && (
          <>
            <span className={`${styles.userName}`}>{userName}</span>
            {avatarUrl && <span className={styles.userPhoto} style={{ backgroundImage: `url(${avatarUrl})` }}/>}
            {!avatarUrl && <Icon className={styles.avatar}/>}
          </>
        )}
        {!userName && (
          <div className="flex gaps align-center" onClick={() => signIn()}>
            <span>Login</span>
            <Icon className={styles.avatar}/>
          </div>
        )}
      </label>
      {email && (
        <ul className={styles.userDropdown}>
          {/*<li>Billing</li>*/}
          <li onClick={() => signIn()}>Link Account</li>
          <li onClick={() => signOut()}><small>({obfuscateEmail(email)})</small> Logout</li>
        </ul>
      )}
    </div>
  )
}

export function obfuscateEmail(email: string, firstVisibleChars = 2, starsCount = 3): string {
  const [user, domain] = email.split("@");
  return user.substring(0, firstVisibleChars) + "*".repeat(starsCount) + "@" + domain;
}
