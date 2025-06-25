import './Header.css';
import React from 'react';
import classNames from "classnames";
import { LightDarkIconSwitcher } from "@/app/components/LightDarkModeIcon";
import { SelectLanguage } from "@/app/components/SelectLangIcon";
import { GithubButton } from "@/app/components/GithubButton";
import { UserMenu } from "@/app/components/UserMenu";
import { ButtonLink } from "@/app/components/Button";
import { Icon } from "@/app/components/Icon";
import HomeSvg from "@/assets/home.svg";

export interface Props extends React.PropsWithChildren {
  className?: string;
  showGithub?: boolean;
  showHome?: boolean;
}

export function Header({ className, showGithub = false, showHome = true, children }: Props) {
  return (
    <header className={classNames("Header flex gaps align-center", className)}>
      <div className="headerIcons flex gaps align-center">
        <LightDarkIconSwitcher/>
        <SelectLanguage/>
      </div>

      <div className="headerButtons box grow flex gaps align-center justify-center">
        {showGithub && <GithubButton className="githubBtn"/>}
        {showHome && (
          <ButtonLink href="/">
            <Icon small svgFill><HomeSvg/></Icon>
          </ButtonLink>
        )}
        {children}
      </div>

      <UserMenu className="headerMenu"/>
    </header>
  )
}
