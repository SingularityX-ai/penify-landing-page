import Head from "next/head";
import { useEffect, useState } from "react";
// import ScrollProgress from "./ScrollProgress";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  
  return (
    <>
      <Head>
        <title>Penify.dev | Automated Documentation Generation</title>
        <meta
          name="description"
          content="Automate human-like docstring/documentation for Python, Java, TypeScript, JavaScript, Kotlin in GitHub, GitLab, Bitbucket."
        />
        <meta
          name="keywords"
          content="Penify.dev, ai docstring, Automated Documentation, GitHub Integration, Source Code Documentation, Intelligent Tracking, Smart Generation, Programming Languages, Python, JavaScript, TypeScript, Java, Kotlin, Real-Time Documentation, Privacy-Focused"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="canonical" href="https://www.penify.dev/" />
      </Head>

      {isLoading ? (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      ) : (
        <div className={`my-app home-dark ${isNavOpen ? "body-active" : ""}`}>
          <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <main>{children}</main>
          <Footer />
          {/* <ScrollProgress /> */}
        </div>
      )}
    </>
  );
}
