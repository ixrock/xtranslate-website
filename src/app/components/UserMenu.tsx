"use client";

import styles from './UserMenu.module.css';
import { signIn, signOut } from "next-auth/react";
import { Icon } from "@/app/components/Icon";
import classNames from "classnames";
import { AuthUser } from "@/auth";

export interface UserMenuProps {
  className?: string;
  user: AuthUser | undefined;
  i18n: {
    login: string;
    logout: string;
    linkAccount: string;
  }
}

export function UserMenu({ className, user, i18n }: UserMenuProps) {
  const { name: userName, image: avatarUrl, email } = user ?? {};

  return (
    <div className={classNames(styles.UserMenu, className)}>
      <label className={`${styles.user} flex gaps align-center`} tabIndex={0}>
        {userName && (
          <>
            <span className={`${styles.userName}`}>{userName}</span>
            {avatarUrl && <span className={styles.userPhoto} style={{ backgroundImage: `url(${avatarUrl})` }}/>}
            {!avatarUrl && <Icon className={styles.avatar}/>}
          </>
        )}
        {!userName && (
          <div className="flex gaps align-center" onClick={() => signIn()}>
            <span>{i18n.login}</span>
            <Icon className={styles.avatar}/>
          </div>
        )}
      </label>
      {email && (
        <ul className={styles.userDropdown}>
          {/*<li>Billing</li>*/}
          <li onClick={() => signIn()}>{i18n.linkAccount}</li>
          <li onClick={() => signOut()}><small>({obfuscateEmail(email)})</small> {i18n.logout}</li>
        </ul>
      )}
    </div>
  )
}

export function obfuscateEmail(email: string, firstVisibleChars = 2, starsCount = 3): string {
  const [user, domain] = email.split("@");
  return user.substring(0, firstVisibleChars) + "*".repeat(starsCount) + "@" + domain;
}
