import BannerMain from "@/components/container/banner/bannerMain";
import FAQ from "@/components/container/faq/FAQ";
import OverviewMid from "@/components/container/overview/overviewMid";
import OverviewTop from "@/components/container/overview/overviewTop";
import Tour from "@/components/container/tour/Tour";
import Layout from "@/components/layout/Layout";
import { useRef } from "react";

export default function Home() {
  const tourRef = useRef<HTMLDivElement>(null);

  const scrollToTour = () => {
    if(tourRef.current) {
      tourRef.current.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <Layout>
      <BannerMain onDemoClick={scrollToTour} />
      <OverviewTop />
      <OverviewMid />
      <Tour ref={tourRef} />
      <FAQ />
    </Layout>
  );
}
