import { forwardRef, useRef, useState } from "react";
import Tour from "../tour/Tour";

const OverviewMid = forwardRef<HTMLDivElement>(function (_,ref) { 
  const tourRef = useRef<HTMLDivElement>(null);
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
                  <i className="fa-brands fa-github"></i>
                  </div>

                  <div className="content">
                    <h4 className="h5">Automated Documentation</h4>
                    <p>Install Snorkell.ai with GitHub to automatically generate docstring for your code repository.</p>

                    <a href="https://github.com/apps/snorkell-ai" className="tool_btn" target="_blank">
                      <i className="fa-solid fa-download" style={{marginRight: "2px"}}></i>
                      Get the tool
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xl-7">
            <div className="generate__thumb" data-aos="fade-up" data-aos-duration="600">
              <div className={`tab-content ${activeTabIndex === 0 ? "active" : ""}`}>
                <Tour ref={tourRef} videoSrc="https://www.youtube.com/embed/3v4O6BBhaE0?si=SUCXOyU7YGwZbayA?autoplay=true&loop=1&rel=0&fs=0&controls=0&modestbranding=1"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
})

export default OverviewMid;