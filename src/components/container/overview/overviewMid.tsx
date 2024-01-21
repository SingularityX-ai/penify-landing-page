import { forwardRef, useState } from "react";
import Image from "next/image";
import gen01 from "public/asset/illustration-generator/placeholder 01.webp";
import gen02 from "public/asset/illustration-generator/placeholder 02.png";
import Anime from "public/images/anime-four.png";
import One from "public/images/icons/overview-one.png";
import Two from "public/images/icons/overview-two.png";

const OverviewMid = forwardRef<HTMLDivElement>(function (_,ref) { 
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section className="section generate pb-0" ref={ref}>
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
                    <Image src={One} loading="lazy" alt="GitHub icon" />
                  </div>

                  <div className="content">
                    <h4 className="h5">Automated Documentation</h4>
                    <p>Sync Snorkell.ai with GitHub to auto-generate/update docs for each pull request in your main branch.</p>

                    <a href="https://github.com/apps/snorkell-ai" className="tool_btn" target="_blank">
                      <i className="fa-solid fa-download" style={{marginRight: "2px"}}></i>
                      Get the tool
                    </a>
                  </div>
                </div>

                <div className={`generate__content-btn ${activeTabIndex === 1 ? "generate__content-btn-active" : ""}`} onClick={() => handleTabClick(1)}>
                  <div className="thumb">
                    <Image src={Two} loading="lazy" alt="Visual Studio Code icon" />
                  </div>

                  <div className="content">
                    <h4 className="h5">Coding Assistant</h4>
                    <p>Snorkell.ai: Free AI coding tool with real-time code explanations in 70+ languages, ensuring efficiency and quality. </p>

                    <a href="https://marketplace.visualstudio.com/items?itemName=Snorkell.snorkell" className="tool_btn" target="_blank">
                      <i className="fa-solid fa-download" style={{marginRight: "2px"}}></i>
                      Get the extension
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xl-7">
            <div className="generate__thumb" data-aos="fade-up" data-aos-duration="600">
              <div className={`tab-content ${activeTabIndex === 0 ? "active" : ""}`}>
                <Image src={gen01} alt="automated documentation illustration" loading="lazy" />
              </div>

              <div className={`tab-content ${activeTabIndex === 1 ? "active" : ""}`}>
                <Image src={gen02} alt="coding assistant illustration" loading="lazy" />
              </div>

              <div className="anime">
                <Image src={Anime} alt="animate background" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
})

export default OverviewMid;