import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import { pageView, trackScroll } from "./gtag";

export default function GoogleAnalytics() {
  const router = useRouter();
  const [hasTrackedScroll, setHasTrackedScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url);
    };

    // Scroll Tracking for homepage
    const handleTrackScroll = () => {
      if (hasTrackedScroll) return;

      const scrolled = window.scrollY + window.innerHeight;
      const height = document.documentElement.scrollHeight;
      const scrollDepth = Math.trunc((scrolled / height) * 100);

      if (scrollDepth > 50) {
        trackScroll(scrollDepth);
        setHasTrackedScroll(true); // Ensure event is only tracked once
      }
    };

    // Record pageview for first page load
    pageView(window.location.pathname);

    // Record pageview on route change
    router.events.on("routeChangeComplete", handleRouteChange);

    if (router.pathname === "/") {
      window.addEventListener("scroll", handleTrackScroll);
    }

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      window.removeEventListener("scroll", handleTrackScroll);
    };
  }, [router.events, router.pathname, hasTrackedScroll]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        async
        defer
      />

      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', "${process.env.GA_MEASUREMENT_ID}", {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
