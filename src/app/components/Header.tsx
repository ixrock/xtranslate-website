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

  return (
    <header className={classNames("Header flex gaps", className)}>
      <div className="headerIcons flex gaps align-center">
        <LightDarkIconSwitcher/>
        <SelectLanguage/>
      </div>

      <div className="headerContent box grow flex gaps align-center justify-center">
        {showGithubBtn && <GithubButton/>}
        {showEarlyAccessBtn && (
          <Button href="/early-access" className="earlyAccessBtn">
            <b className="label">{t("early_access_button_label")}</b>
            <span className="extraInfo">{t("early_access_button_label_extra")}</span>
          </Button>
        )}
        {children}
      </div>

      <UserMenu className="headerMenu" user={session?.user}/>
    </header>
  )
}
