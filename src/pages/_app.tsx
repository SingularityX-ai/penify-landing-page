import "aos/dist/aos.css";
import "@/styles/globals.css";
import "@xyflow/react/dist/style.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useEffect } from "react";
import AOS from "aos";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
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

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Penify.dev | Automated Documentation Generation"
        />

        <meta
          property="og:description"
          content="Automate human-like docstring/documentation for Python, Java, TypeScript, JavaScript, Kotlin in GitHub, GitLab, Bitbucket."
        />

        <meta property="og:type" content="website" />

        {/*

        // image URL
        <meta
          property="og:image"
          content="https://example.com/about-image.jpg"
        />

        // canonical URL of your page
        <meta property="og:url" content="https://your-site.com/about" />
        */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
      <SpeedInsights />
    </Fragment>
  );
}
