import './Header.css';
import React from 'react';
import classNames from "classnames";
import { auth } from "@/auth";
import { LightDarkIconSwitcher } from "@/app/components/LightDarkModeIcon";
import { SelectLanguage } from "@/app/components/SelectLangIcon";
import { GithubButton } from "@/app/components/GithubButton";
import { UserMenu } from "@/app/components/UserMenu";
import { Button } from "@/app/components/Button";
import { getLocalization } from "@/app/i18n";

export interface Props extends React.PropsWithChildren {
  className?: string;
  showGithubBtn?: boolean;
  showEarlyAccessBtn?: boolean;
}

export async function Header(
  {
    className, children,
    showGithubBtn = false,
    showEarlyAccessBtn = false,
  }: Props) {
  const session = await auth();
  const t = await getLocalization();

  const i18n = {
    login: t("user_menu_login"),
    logout: t("user_menu_logout"),
    linkAccount: t("user_menu_link_account"),
    earlyAccessLabel: t("early_access_button_label"),
    earlyAccessLabelExtra: t("early_access_button_label_extra"),
  };

  return (
    <header className={classNames("Header flex gaps align-center", className)}>
      <div className="headerIcons flex gaps align-center">
        <LightDarkIconSwitcher/>
        <SelectLanguage/>
      </div>

      <div className="headerButtons box grow flex gaps align-center justify-center">
        {showGithubBtn && <GithubButton className="githubBtn"/>}
        {showEarlyAccessBtn && (
          <Button href="/early-access" className="earlyAccessBtn">
            <b className="label">{i18n.earlyAccessLabel}</b>
            <span className="extraInfo">{i18n.earlyAccessLabelExtra}</span>
          </Button>
        )}
        {children}
      </div>

      <UserMenu className="headerMenu" user={session?.user} i18n={i18n}/>
    </header>
  )
}
