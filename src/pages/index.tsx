import BannerMain from "@/components/container/banner/bannerMain";
import FAQ from "@/components/container/faq/FAQ";
import OverviewMid from "@/components/container/overview/overviewMid";
import OverviewTop from "@/components/container/overview/overviewTop";
import Tour from "@/components/container/tour/Tour";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <BannerMain />
      <OverviewTop />
      <OverviewMid />
      <Tour />
      <FAQ />
    </Layout>
  );
}
