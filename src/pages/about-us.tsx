import BannerTop from "@/components/container/banner/bannerTop";
import Teams from "@/components/container/teams/team";
import Layout from "@/components/layout/Layout";

export default function AboutUs () {
  return (
    <Layout>
      <BannerTop desc="Our Teams" page="Our Teams" />
      <Teams />
    </Layout>
  )
}