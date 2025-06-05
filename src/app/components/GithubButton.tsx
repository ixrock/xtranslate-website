import styles from './GithubButton.module.css';
import React from 'react';
import { extensionGithubRepoUrl } from "@/app/config";
import { getGithubRepoJson } from "@/app/api/github-apis";
import { Icon } from "@/app/components/Icon";
import GithubIconSvg from "@/assets/github.svg";

export interface GithubButtonProps {
  className?: string;
}

export async function GithubButton({ className = "" }: GithubButtonProps) {
  const { stargazers_count: starsCount } = await getGithubRepoJson("ixrock", "XTranslate");

  return (
    <a
      href={extensionGithubRepoUrl}
      className={`${styles.GithubButton} flex gaps align-center ${className}`}
      target="_blank"
    >
      <Icon className={styles.githubIcon}>
        <GithubIconSvg/>
      </Icon>
      <span className={styles.star}>★</span>
      <span className={styles.starCount}>{starsCount}</span>
    </a>
  )
}