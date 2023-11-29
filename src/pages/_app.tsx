// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome 6
import "public/font-awesome/css/all.min.css";

// aos
import "aos/dist/aos.css";

// styles
import "@/styles/main.scss";

import type { AppProps } from "next/app";
import { Suspense, useEffect } from "react";
import Aos from "aos";
import GoogleAnalytics from "@/utils/GoogleAnalytics";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Suspense>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </Suspense>
  );
}
