import Link from "next/link";
import Tour from "../tour/Tour";
import { useRef } from "react";

export default function BannerMain() {
  const tourRef = useRef<HTMLDivElement>(null);
  return (
    <section className="section banner-one bg-img">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-md-10 col-lg-5">
            <div className="banner-one__content">
              <p className="h6">
                <span>AI Documentation</span>
              </p>

              <h1 className="h1">Automate Human Like Docstring in Seconds</h1>
              {/* <br /> */}
              <div className="section__content-cta mt-4 mb-3">
                <Link
                  href="https://github.com/apps/snorkell-ai"
                  className="btn btn--primary"
                  aria-label="Github App"
                >
                  Start free now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7 scale-1-5">
            <Tour
              ref={tourRef}
              videoSrc="https://www.youtube.com/embed/s32GS0glydA?autoplay=true&loop=1&rel=0&fs=0&playlist=s32GS0glydA&controls=0&modestbranding=1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
