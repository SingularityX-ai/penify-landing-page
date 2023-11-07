import Image from "next/image";
import Link from "next/link";
import heroIllustration from "public/images/banner/banner-one-thumb.png";

export default function BannerMain() {
  return (
    <section className="section banner-one bg-img">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-md-10 col-lg-6">
            <div className="banner-one__content">
              <p className="h6">
              <span>AI Documentation</span>
              </p>

              <h1 className="h1">Generate Automated Documentation For Your GitHub Repo&apos;s</h1>

              <div className="section__content-cta">
                <Link href="https://github.com/apps/snorkell-ai" className="btn btn--primary">
                  start free now
                </Link>
                <Link href="/" className="btn btn--secondary">
                  request A Demo
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="banner-one__thumb text-start text-lg-end">
              <Image src={heroIllustration} priority alt="hero illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}