import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import imgOne from "@public/images/banner/anime-one.webp";
import imgTwo from "@public/images/banner/anime-two.webp";
import pythonIcon from "@public/images/banner/python-logo.webp";
import jsIcon from "@public/images/banner/js-icon.webp";
import gitIcon from "@public/images/banner/github-icon.webp";
// import javaIcon from "@public/images/banner/java-icon.png";

const strings: string[] = ["Pull Request", "Code", "API", "Architecture"];

const BannerTwo = () => {
  return (
    <section className="section banner-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-9">
            <div className="banner-two__content" data-aos-duration="600">
              <h1 className="h1">Automate your Software Documentation using LLMs</h1>
              <h2 className="h1">
                <span id="textTyped">
                  <ReactTyped
                    backSpeed={60}
                    typeSpeed={120}
                    strings={strings}
                    showCursor={false}
                    loop
                    loopCount={Infinity}
                  />{" "}
                  Documentation
                </span>
              </h2>
              <p className="text-lg">
                Penify uses LLMs to generate Pull Request, Code, API and
                Architecture Documentation.
              </p>
              <div className="section__content-cta">
                <Link
                  href="https://github.com/apps/penify-dev/installations/select_target"
                  className="btn btn-fo"
                >
                  Start free now
                </Link>

                <Link
                  href="https://calendly.com/sumansaurabh-snorkell/intro-snorkell-i?month=2024-01"
                  className="btn btn--secondary"
                >
                  Request a demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime">
        <Image
          src={imgOne}
          alt="Image"
          className="one"
          width={280}
          height={280}
          style={{ borderRadius: "150px" }}
        />
        <Image
          src={imgTwo}
          alt="Image"
          className="two"
          width={350}
          style={{ borderRadius: "85px" }}
        />

        <Image src={pythonIcon} className="three" width={64} alt="Image" />
        <Image src={jsIcon} className="four" width={48} alt="Image" />
        <Image src={gitIcon} className="five" width={72} alt="Image" />
      </div>
    </section>
  );
};

export default BannerTwo;
