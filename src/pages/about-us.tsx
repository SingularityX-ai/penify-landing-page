import BannerTop from "@/components/container/banner/bannerTop";
import Teams from "@/components/container/teams/team";
import Layout from "@/components/layout/Layout";

export default function AboutUs () {
  return (
    <Layout>
      <BannerTop desc="About Us" page="About Us" />
      <Teams />
    </Layout>
  )
}