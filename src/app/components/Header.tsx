import './Header.css';
import React from 'react';
import classNames from "classnames";
import { auth } from "@/auth";
import { LightDarkIconSwitcher } from "@/app/components/LightDarkModeIcon";
import { SelectLanguage } from "@/app/components/SelectLangIcon";
import { GithubButton } from "@/app/components/GithubButton";
import { UserMenu } from "@/app/components/UserMenu";
import { ButtonLink } from "@/app/components/Button";
import { getServerLocalization } from "@/app/i18n";
import { Icon } from "@/app/components/Icon";
import HomeSvg from "@/assets/home.svg";

export interface Props extends React.PropsWithChildren {
  className?: string;
  showGithub?: boolean;
  showHome?: boolean;
}

export async function Header(
  {
    className,
    showGithub = false,
    showHome = true,
    children,
  }: Props) {
  const session = await auth();
  const t = await getServerLocalization();

  const i18n = {
    login: t("user_menu.login"),
    logout: t("user_menu.logout"),
    linkAccount: t("user_menu.link_account"),
  };

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

      <UserMenu className="headerMenu" user={session?.user} i18n={i18n}/>
    </header>
  )
}
