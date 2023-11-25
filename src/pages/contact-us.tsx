import BannerTop from "@/components/container/banner/bannerTop";
import ContactFormLogic from "@/components/container/contact-us/ContactFormLogic";
import Layout from "@/components/layout/Layout";

export default function ContactUs () {
  return (
    <Layout>
      <BannerTop desc="Contact Us" page="Contact Us" />
      <ContactFormLogic />
    </Layout>
  )
}