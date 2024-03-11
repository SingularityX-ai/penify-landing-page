import Link from "next/link";
import { forwardRef } from "react";

const overviewData = [
  {
    title: "Python",
    example: "Python",
    link: "https://github.com/SingularityX-ai/crewAI/pull/4/files",
    icon: "fa-python",
  },
  {
    title: "Java",
    example: "Java",
    link: "https://github.com/sunilagwl5/Bus_Reservation_System/commit/95f650f89a046a0fb4bb08e962406bdf4226842d",
    icon: "fa-java",
  },
  {
    title: "JavaScript/TypeScript",
    example: "TypeScript",
    link: "https://github.com/sunilagwl5/Bus_Reservation_System/commit/95f650f89a046a0fb4bb08e962406bdf4226842d",
    icon: "fa-js",
  },
  {
    title: "Kotlin",
    example: "Kotlin",
    link: "https://github.com/SingularityX-ai/kparser/pull/14/files",
    icon: "fa-code",
  },
];

const OverviewMid = forwardRef<HTMLDivElement>(function (_, ref) {
  return (
    <section className="section generate pb-4" ref={ref}>
      <div className="container">
        <div className="row items-gap">
          <div className="col-12 col-lg-12 col-xl-12">
            <div className="generate__content" data-aos="fade-up" data-aos-duration="600">
              <div className="section__header text-center">
                <h2 className="h2">
                  <span className="grd" style={{ textTransform: "none" }}>
                    Every PR merge will automatically generate Docstring
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row items-gap">
          {overviewData.map(({ title, example, link, icon }) => (
            <div className="col-12 col-lg-6 col-xl-6" key={title}>
              <div className="generate__content" data-aos="fade-up" data-aos-duration="600">
                <div className="generate__content-btn generate__content-btn-active">
                  <Link href={link} target="_blank" rel="noopener noreferrer" className="gap-3">
                    <div className="thumb">
                      <i className={`fa-brands ${icon}`}></i>
                    </div>
                    <div className="content">
                      <h4 className="h5">{title} Example</h4>
                      <p style={{ lineHeight: 1.4, marginTop: "2px" }}>Please click to see the generated Docstring for the {example} Repository</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default OverviewMid;
