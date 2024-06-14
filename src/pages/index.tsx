import BannerMain from "@/components/container/banner/bannerMain";
import FAQ from "@/components/container/faq/FAQ";
import OverviewMid02 from "@/components/container/overview/overviewMid02";
import PricingOne from "@/components/container/pricing/PricingOne";
import Tour from "@/components/container/tour/Tour";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function Home() {
  const tourRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const scrollToProduct = () => {
    if (router.query.scrollTo === "exampleOverview" && productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (router.query.scrollTo === "pricing" && pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (router.query.scrollTo === "faq" && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    router.query.scrollTo !== "exampleOverview" && window.scrollTo(0, 0);
    
    scrollToProduct();
    
    router.events.on("routeChangeComplete", scrollToProduct);
    return () => router.events.off("routeChangeComplete", scrollToProduct);
  }, [router.query]);

  return (
    <Layout>
      <BannerMain />
      <Tour ref={tourRef} />
      <OverviewMid02 ref={productRef} />
      <PricingOne ref={pricingRef}/>
      <FAQ ref={faqRef}/>
    </Layout>
  );
}
