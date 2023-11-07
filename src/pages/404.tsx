import Layout from "@/components/layout/Layout";
import Image from "next/image";
import errorImg from "public/asset/not-found-dark.svg";

export default function Error() {
  return (
    <Layout>
      <section className="section error pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="error__content text-center">
                <div className="section__header">
                  <h2 className="h3" data-aos="fade-up" data-aos-duration="600">404: Page Not Found</h2>
                  <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">We couldn&apos;t find that page, please check the URL and try again.</p>
                </div>

                <Image src={errorImg} alt="person confused as the page is not loading" priority data-aos="fade-up" data-aos-duration="600" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
