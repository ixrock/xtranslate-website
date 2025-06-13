import './Header.css';
import React from 'react';
import classNames from "classnames";
import { auth } from "@/auth";
import { defaultLocale, Locale } from "@/app/config";
import { LightDarkIconSwitcher } from "@/app/components/LightDarkModeIcon";
import { SelectLanguage } from "@/app/components/SelectLangIcon";
import { GithubButton } from "@/app/components/GithubButton";
import { UserMenu } from "@/app/components/UserMenu";
import { Button } from "@/app/components/Button";
import { getMessage, MessagePlaceholders } from "@/app/i18n";

export interface Props extends React.PropsWithChildren {
  className?: string;
  locale: Locale;
}

export async function Header({ className, locale = defaultLocale }: Props) {
  const session = await auth();
  const t = (id: string, placeholders: MessagePlaceholders = {}) => getMessage({ msgId: id, locale, placeholders });

  return (
    <header className={classNames("Header flex gaps", className)}>
      <div className="headerIcons flex gaps align-center">
        <LightDarkIconSwitcher/>
        <SelectLanguage locale={locale}/>
      </div>

      <div className="box grow flex gaps align-center justify-center">
        <GithubButton/>
        <Button href={`/early-access?lang=${locale}`} className="earlyAccessBtn">
          <b className="label">{t("early_access_button_label")}</b>
          <span className="extraInfo">{t("early_access_button_label_extra")}</span>
        </Button>
      </div>

      <UserMenu user={session?.user}/>
    </header>
  )
}
