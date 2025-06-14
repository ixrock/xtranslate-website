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
import { getUserLang } from "@/actions/get-set-lang";

export interface Props extends React.PropsWithChildren {
  className?: string;
}

export async function Header({ className }: Props) {
  const session = await auth();
  const locale = await getUserLang();
  const t = await getLocalization();

  return (
    <header className={classNames("Header flex gaps", className)}>
      <div className="headerIcons flex gaps align-center">
        <LightDarkIconSwitcher/>
        <SelectLanguage/>
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
