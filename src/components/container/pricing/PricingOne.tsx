import React, { forwardRef } from "react";
import Link from "next/link";

const PricingOne = forwardRef<HTMLDivElement>(function (_, ref) {
  return (
    <section className="section pricing-two bg-img" ref={ref}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-6">
            <div
              className="section__header"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              <h2 className="h2">Ready to Get Started?</h2>
            </div>
          </div>
        </div>
        <div className="row items-gap">
          <div className="col-12 col-md-6 col-lg-6 col-xxl-3">
            <div
              className="pricing-two__single"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              <h5 className="h5">Freemium</h5>
              <div className="meta">
                <div className="content">
                  <h2 className="h2 title">$0</h2>
                  <p>paid per month</p>
                </div>
              </div>
              <hr />
              <h5 className="h5 title">Private Repo</h5>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>3 Commits Daily
                </li>
              </ul>
              <hr />
              <h5 className="h5 title">Public Repo</h5>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>Unlimited Commits
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>1 Full Repo Documentation
                </li> 
              </ul>
              <hr />
              <Link href="https://dashboard.snorkell.ai/profile/payments" target="_blank" className="btn btn--septenary">
                Start for free
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xxl-3">
            <div
              className="pricing-two__single"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="200"
            >
              <h5 className="h5 yel">Basic</h5>
              <div className="meta">
                <div className="content">
                  <h2 className="h2 title">$10</h2>
                  <p>paid per month / repository</p>
                </div>
              </div>
              <hr />
              <h5 className="h5 title">Private Repo</h5>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>Unlimited Commits for 1 Repo
                </li>
                {/* <li>
                  <i className="fa-solid fa-check"></i>1 Full Repo
                </li> */}
              </ul>
              <hr />
              <h5 className="h5 title">Public Repo</h5>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>Unlimited Commits
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>3 Full Repo Documentation
                </li> 
              </ul>
              <hr />
              <Link href="https://dashboard.snorkell.ai/profile/payments" target="_blank" className="btn btn--septenary">
                choose a plan
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xxl-3">
            <div
              className="pricing-two__single pricing-two__single--alt"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="400"
            >
              <h5 className="h5 pri">Pro</h5>
              <div className="meta">
                <div className="content">
                  <h2 className="h2 title">$45</h2>
                  <p>paid per month / Repository</p>
                </div>
              </div>
              <hr />
              <h5 className="h5 title">Private Repo</h5>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>Unlimited Commits for 5 Repo
                </li>
                {/* <li>
                  <i className="fa-solid fa-check"></i>1 Full Repo
                </li> */}
              </ul>
              <hr />
              <h5 className="h5 title">Public Repo</h5>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>Unlimited Commits
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>18 Full Repo Documentation
                </li> 
              </ul>
              <hr />
              <Link href="https://dashboard.snorkell.ai/profile/payments" target="_blank" className="btn btn--septenary">
                choose a plan
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xxl-3">
            <div
              className="pricing-two__single"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="600"
            >
              <h5 className="h5 tri">Elite</h5>
              <div className="meta">
                <div className="content">
                  <h2 className="h2 title">Contact Us For Details</h2>
                </div>
              </div>
              <hr />
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>On Premise Support
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  GPT-4 and Mistral
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Private GPT-Keys
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Access to Experimental Features
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  24*7 Support
                </li>
                <li></li>
              </ul>
              <hr />
              <Link href="https://dashboard.snorkell.ai/profile/payments" target="_blank" className="btn btn--septenary">
                choose a plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default PricingOne;
