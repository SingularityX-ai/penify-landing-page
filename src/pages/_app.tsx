import "aos/dist/aos.css";
import "@/styles/globals.css";
import "@xyflow/react/dist/style.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import AOS from "aos";
import Script from "next/script";
import { GoogleTagManager, sendGTMEvent } from "@next/third-parties/google";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);

    checkMobile();

    window.addEventListener("resize", checkMobile);

    AOS.init({ disable: isMobile });

    return () => window.removeEventListener("resize", checkMobile);
  }, [isMobile]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      sendGTMEvent({
        event_category: "pageView",
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;

      if (target.tagName === "A") {
        sendGTMEvent({
          event_category: "link",
          event_label: target.href || target,
        });
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => document.removeEventListener("click", handleLinkClick);
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

      {/* Hubspot analytics */}
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-na1.hs-scripts.com/44651459.js"
        strategy="afterInteractive"
      />

      <GoogleTagManager gtmId="G-NQRNJW5NS7" />

      <Component {...pageProps} />
    </Fragment>
  );
}
