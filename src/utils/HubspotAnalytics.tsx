import Script from "next/script";

export default function HubspotAnalytics() {
    return (
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-na1.hs-scripts.com/44651459.js"
        strategy="afterInteractive"
      />
    );
}