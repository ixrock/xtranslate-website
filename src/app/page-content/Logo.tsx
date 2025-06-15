import "./Logo.css"
import React from "react";
import XTranslateLogoUrl from "@/assets/xtranslate-logo.svg?url"

export function Logo() {
  return (
    <a href="/" className="Logo">
      <img src={XTranslateLogoUrl} alt="XTranslate"/>
    </a>
  )
}