import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect} from "react";
import { pageView } from "./gtag";

export default function GoogleAnalytics() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url);
    };

    // Record pageview for first page load
    pageView(window.location.pathname);

    // Record pageview on route change
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
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
