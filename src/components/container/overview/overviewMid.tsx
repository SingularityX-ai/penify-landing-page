import { forwardRef } from "react";

const OverviewMid = forwardRef<HTMLDivElement>(function (_, ref) {
  return (
    <section className="section generate pb-0" ref={ref}>
      <div className="container">
        <div className="row items-gap">
          <div className="col-12 col-lg-12 col-xl-12">
            <div
              className="generate__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
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
          <div className="col-12 col-lg-6 col-xl-6">
            <div
              className="generate__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div>
                <div
                  className={`generate__content-btn generate__content-btn-active`}
                >
                  <a
                    href="https://github.com/SingularityX-ai/crewAI/pull/4/files"
                    target="_blank"
                  >
                    <div className="thumb">
                      <i className="fa-brands fa-python"></i>
                    </div>

                    <div className="content">
                      <h4 className="h5">Python Example</h4>
                      <p>
                        Please click to see the generated Docstring for the Python Repository
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-6">
            <div
              className="generate__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div>
                <div
                  className={`generate__content-btn generate__content-btn-active`}
                >
                  <a
                    href="https://github.com/sunilagwl5/Bus_Reservation_System/commit/95f650f89a046a0fb4bb08e962406bdf4226842d"
                    target="_blank"
                  >
                    <div className="thumb">
                      <i className="fa-brands fa-java"></i>
                    </div>

                    <div className="content">
                      <h4 className="h5">Java Example</h4>
                      <p>
                        Please click to see the generated Docstring for the Java Repository
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-6">
            <div
              className="generate__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div>
                <div
                  className={`generate__content-btn generate__content-btn-active`}
                >
                  <a
                    href="https://github.com/sunilagwl5/Bus_Reservation_System/commit/95f650f89a046a0fb4bb08e962406bdf4226842d"
                    target="_blank"
                  >
                    <div className="thumb">
                      <i className="fa-brands fa-js"></i>
                    </div>

                    <div className="content">
                      <h4 className="h5">Javascript/Typescript Example</h4>
                      <p>
                        Please click to see the generated Docstring for the Typescript Repository
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-6">
            <div
              className="generate__content"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div>
                <div
                  className={`generate__content-btn generate__content-btn-active`}
                >
                  <a
                    href="https://github.com/SingularityX-ai/kparser/pull/14/files"
                    target="_blank"
                  >
                    <div className="thumb">
                      <i className="fa-solid fa-code"></i>
                    </div>

                    <div className="content">
                      <h4 className="h5">Kotlin Example</h4>
                      <p>
                        Please click to see the generated Docstring for the Kotlin Repository
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default OverviewMid;
