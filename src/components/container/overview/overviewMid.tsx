import { useState } from "react";
import Image from "next/image";
import gen01 from "public/asset/illustration-generator/placeholder 01.png";
import gen02 from "public/asset/illustration-generator/placeholder 02.png";
import Anime from "public/images/anime-four.png";
import One from "public/images/icons/overview-one.png";
import Two from "public/images/icons/overview-two.png";

export default function OverviewMid () {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section className="section generate pb-0">
      <div className="container">
        <div className="row items-gap">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="generate__content" data-aos="fade-up" data-aos-duration="600">
              <div className="section__header text-start">
                <h2 className="h2">
                  Automate Documentation in seconds using
                  <span className="grd" style={{ textTransform: "none" }}>
                    {" "}
                    Snorkell.ai
                  </span>
                </h2>
              </div>

              <div>
                <div className={`generate__content-btn ${activeTabIndex === 0 ? "generate__content-btn-active" : ""}`} onClick={() => handleTabClick(0)}>
                  <div className="thumb">
                    <Image src={One} priority alt="Image" />
                  </div>

                  <div className="content">
                    <h5 className="h5">Automated Documentation</h5>
                    {/* Inshort: Sync Snorkell.ai with GitHub to auto-generate/update docs for each pull request in your main branch. */}
                    <p>Connect Snorkell.ai with your GitHub repo, and watch it automatically create or refresh your function documentation with each pull request that lands in your "main" branch.</p>
                  </div>
                </div>

                <div className={`generate__content-btn ${activeTabIndex === 1 ? "generate__content-btn-active" : ""}`} onClick={() => handleTabClick(1)}>
                  <div className="thumb">
                    <Image src={Two} priority alt="Image" />
                  </div>

                  <div className="content">
                    <h5 className="h5">Coding Assistant</h5>
                    {/* Inshort: Snorkell.ai: Free AI coding tool with real-time code explanations in 70+ languages, ensuring efficiency and quality. */}
                    <p> Step into the future of coding with Snorkell.ai, your free AI-backed coding companion. Designed with state-of-the-art AI, Snorkell.ai offers real-time code explanation across 70+ languages, ensuring unparalleled efficiency and unmatched quality in your suggestions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xl-7">
            <div className="generate__thumb" data-aos="fade-up" data-aos-duration="600">
              <div className={`tab-content ${activeTabIndex === 0 ? "active" : ""}`}>
                <Image src={gen01} alt="image" />
              </div>

              <div className={`tab-content ${activeTabIndex === 1 ? "active" : ""}`}>
                <Image src={gen02} alt="image" />
              </div>

              <div className="anime">
                <Image src={Anime} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 