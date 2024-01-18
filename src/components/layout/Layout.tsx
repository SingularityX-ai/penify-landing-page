import Head from "next/head";
import { useState } from "react";
// import ScrollProgress from "./ScrollProgress";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Snorkell.ai | Automated Documentation Generation</title>
        <meta
          name="description"
          content="Automate human-like docstrings/documentation for Python, Java, TypeScript, JavaScript, Kotlin in GitHub, GitLab, Bitbucket."
        />
        <meta
          name="keywords"
          content="Snorkell.ai, ai docstring, Automated Documentation, GitHub Integration, Source Code Documentation, Intelligent Tracking, Smart Generation, Programming Languages, Python, JavaScript, TypeScript, Java, Kotlin, Real-Time Documentation, Privacy-Focused"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.snorkell.ai/" />
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
