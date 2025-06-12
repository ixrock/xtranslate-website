import styles from './GithubButton.module.css';
import React from 'react';
import classNames from "classnames";
import { Button, ButtonProps } from "@/app/components/Button";
import { githubRepoUrl } from "@/app/config";
import { getGithubRepoJson } from "@/app/api/github-apis";
import { Icon } from "@/app/components/Icon";
import GithubIconSvg from "@/assets/github.svg";

export interface GithubButtonProps extends ButtonProps {
}

export async function GithubButton(props: GithubButtonProps) {
  const { stargazers_count: starsCount } = await getGithubRepoJson("ixrock", "XTranslate");

  return (
    <Button
      target="_blank"
      {...props}
      href={githubRepoUrl}
      className={classNames(styles.GithubButton, props.className, "flex gaps align-center")}
    >
      <Icon className={styles.githubIcon}>
        <GithubIconSvg/>
      </Icon>
      <span className={styles.star}>★</span>
      <span>{starsCount}</span>
    </Button>
  )
}