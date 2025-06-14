import { Header } from "@/app/components/Header";
import { MainContent } from "@/app/page-content/MainContent";

export default async function Home() {
  return (
    <>
      <Header showGithubBtn showEarlyAccessBtn/>
      <MainContent/>
    </>
  );
}
