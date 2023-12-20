import Image from "next/image";
import Link from "next/link";
import heroIllustration from "public/images/banner/banner-one-thumb.png";

type BannerMainProps = {
  onDemoClick: () => void;
}

export default function BannerMain({onDemoClick}: BannerMainProps) {
  return (
    <section className="section banner-one bg-img">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-md-10 col-lg-6">
            <div className="banner-one__content">
              <p className="h6">
              <span>AI Documentation</span>
              </p>

              <h1 className="h1">Smartly Automate Your Code Documentation with GenAI</h1>

              <div className="section__content-cta">
                <Link href="https://github.com/apps/snorkell-ai" className="btn btn--primary">
                  Start free now
                </Link>
                <button type="button" onClick={onDemoClick} className="btn btn--secondary">
                  Request a demo
                </button>
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