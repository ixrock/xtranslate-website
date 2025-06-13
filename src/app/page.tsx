import { headers } from "next/headers";
import { MainPage } from "@/app/pages/MainPage";
import { defaultLocale, Locale, Locales } from "@/app/config";
import { Header } from "@/app/components/Header";

interface Props {
  searchParams: Promise<{ lang?: Locale }>
}

export default async function Home({ searchParams }: Props) {
  let { lang } = await searchParams;

  if (!lang || (lang && !Locales[lang])) {
    const header = await headers();

    const acceptedLanguages = (header.get("accept-language") ?? "")
      .split(/;q=[0-9.]+/)
      .flatMap(lang => lang.split(","))
      .map(lang => lang.trim())
      .filter(Boolean) as Locale[];

    lang = acceptedLanguages.find(lang => Locales[lang]) ?? defaultLocale;
  }

  return (
    <>
      <Header locale={lang}/>
      <MainPage locale={lang}/>
    </>
  );
}
