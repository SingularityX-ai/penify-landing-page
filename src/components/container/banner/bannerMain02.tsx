import React from "react";
import Image from "next/image";
import Link from "next/link";
import One from "@public/images/banner/anime-one.png";
import Two from "@public/images/banner/anime-two.png";
import Three from "@public/images/banner/anime-three.png";
import Four from "@public/images/banner/anime-four.png";
import Five from "@public/images/banner/anime-five.png";
import { ReactTyped } from "react-typed";

const strings: string[] = [
  "Pull Request Documentation",
  "Full Repository Documentation",
  "Architecture Documentation",
  "API Documentation"
];

const BannerTwo = () => {
  return (
    <section className="section banner-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-9">
            <div
              className="banner-two__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1 className="h1">Best AI for Generating</h1>
              <h2 className="h1">
                <span id="textTyped">
                  <ReactTyped
                    backSpeed={40}
                    typeSpeed={80}
                    strings={strings}
                    showCursor
                    loop
                    loopCount={Infinity}
                  />
                </span>
              </h2>
              <p className="text-lg">
                Create human-quality blog posts, SEO articles, news, press
                releases, and more in seconds
              </p>
              <div className="section__content-cta">
                <Link
                  href="https://github.com/apps/penify-dev"
                  className="btn btn--secondary"
                >
                  Start free now
                </Link>
                <p>7-day trial. No credit card required.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime">
        <Image src={One} alt="Image" className="one" />
        <Image src={Two} alt="Image" className="two" />
        <Image src={Three} alt="Image" className="three" />
        <Image src={Four} alt="Image" className="four" />
        <Image src={Five} alt="Image" className="five" />
      </div>
    </section>
  );
};

export default BannerTwo;
