import Head from "next/head";
import { useState } from "react";
// import ScrollProgress from "./ScrollProgress";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Snorkell.ai | Automated GitHub Documentation Tool</title>
        <meta
          name="description"
          content="Automate human-like docstrings/documentation for Python, Java, TypeScript, JavaScript, Kotlin in GitHub, GitLab, Bitbucket."
        />
        <meta
          name="keywords"
          content="Snorkell.ai, ai docstring, Automated Documentation, GitHub Integration, Source Code Documentation, Intelligent Tracking, Smart Generation, Programming Languages, Python, JavaScript, TypeScript, Java, Kotlin, Real-Time Documentation, Privacy-Focused"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" href="/favicon.ico" aria-label="Icon" />
        <Link rel="canonical" href="https://www.snorkell.ai/"  aria-label="Snorkell Url"/>
      </Head>

        <div className={`my-app home-dark ${isNavOpen ? "body-active" : ""}`}>          
          <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <main>{children}</main>
          <Footer />
          {/* <ScrollProgress /> */}
        </div>
    </>
  );
}
