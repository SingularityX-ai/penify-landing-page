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

              <h1 className="h1">Effortlessly Generate Human like Docstrings in Seconds</h1>

              <div className="section__content-cta mt-4 mb-3">
                <Link
                  href="https://github.com/apps/snorkell-ai"
                  className="btn btn--primary"
                  aria-label="Github App"
                >
                  Start free now
                </Link>
                <a
                    href="https://calendly.com/sumansaurabh-snorkell/intro-snorkell-i?month=2024-01"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Book a demo"
                  >
                <button
                  type="button"
                  className="btn btn--secondary"
                >
                 
                    {" "}
                    Request a demo{" "}
                  
                </button>
                </a>
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
  );
}
