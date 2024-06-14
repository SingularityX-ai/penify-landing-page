import React, { forwardRef, useState } from "react";
import Image from "next/image";
import Thumb from "@public/images/generate/one.png";
import Anime from "@public/images/generate/anime.png";

const TAB_ITEMS = [
  {
    title: "blog article",
    description:
      "create unique and well organized full length articles from start to finish",
    icon: "fa-python",
    img: Thumb,
    count: 0,
  },
  {
    title: "blog article",
    description:
      "create unique and well organized full length articles from start to finish",
    icon: "fa-python",
    img: Thumb,
    count: 1,
  },
];

const OverviewMid02 = forwardRef<HTMLDivElement>(function (_, ref) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section
      className="section generate"
      style={{ paddingBottom: "74px" }}
      ref={ref}
    >
      <div className="container">
        <div className="row items-gap">
          <div className="col-12 col-lg-6 col-xl-5">
            <div
              className="generate__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="section__header text-start">
                <h2 className="h2">
                  Generate content in seconds using{" "}
                  <span className="grd">Tech AI</span>
                </h2>
              </div>
              <div>
                {TAB_ITEMS.map(({ title, description, icon, count }) => (
                  <div
                    className={`generate__content-btn ${
                      activeTabIndex === count
                        ? "generate__content-btn-active"
                        : ""
                    }`}
                    onClick={() => handleTabClick(count)}
                    key={`key-${crypto.randomUUID()}`}
                  >
                    <div className="thumb">
                      <i className={`fa-brands ${icon}`}></i>
                    </div>

                    <div className="content">
                      <h5 className="h5">{title}</h5>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div
              className="generate__thumb"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              {TAB_ITEMS.map(({ count, img }) => (
                <div
                  className={`tab-content ${
                    activeTabIndex === count ? "active" : ""
                  }`}
                  key={`key-${crypto.randomUUID()}`}
                >
                  <Image src={img} alt="image" />
                </div>
              ))}

              <div className="anime">
                <Image src={Anime} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default OverviewMid02;
