import BannerTop from "@/components/container/banner/bannerTop";
import ContactMain from "@/components/container/contact-us/ContactMain";
import Layout from "@/components/layout/Layout";

export default function ContactUs () {
  return (
    <Layout>
      <BannerTop desc="Contact Us" page="Contact Us" />
      <ContactMain />
    </Layout>
  )
}