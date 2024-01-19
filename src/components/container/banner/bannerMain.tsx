import Link from "next/link";
import Tour from "../tour/Tour";
import { useRef } from "react";

type BannerMainProps = {
  onDemoClick: () => void;
}

export default function BannerMain({onDemoClick}: BannerMainProps) {
  const tourRef = useRef<HTMLDivElement>(null);
  return (
    <section className="section banner-one bg-img">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-md-10 col-lg-6">
            <div className="banner-one__content">
              <p className="h6">
              <span>AI Documentation</span>
              </p>

              <h1 className="h1">Smartly Automate Human Like Code Docstring</h1>

              <div className="section__content-cta mt-4 mb-3">
                <Link href="https://github.com/apps/snorkell-ai" className="btn btn--primary" aria-label="Github App">
                  Start free now
                </Link>
              </div>

            </div>
          </div>

          <div className="col-12 col-lg-6">
            <Tour ref={tourRef}/>
          </div>
        </div>
      </div>
    </section>
  )
}