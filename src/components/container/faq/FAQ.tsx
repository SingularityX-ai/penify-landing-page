import { useState } from "react";
import React, { forwardRef } from "react";


const FAQ = forwardRef<HTMLDivElement>(function (_, ref) {
  const [imgTab, setImgTab] = useState<number>(-1);

  return (
    <section className="section faq" ref={ref}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-7">
            <div className="section__header">
              <h2 className="h2">Frequently Asked Questions</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="accordion" id="accordion">
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
              >
                <h5 className="accordion-header" id="headingOne">
                  <button
                    type="button"
                    className={`${
                      imgTab === 0 ? "" : "collapsed"
                    } accordion-button`}
                    onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is Penify(previously Snorkell.ai)?
                  </button>
                </h5>

                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse ${
                    imgTab === 0 ? "show" : ""
                  }`}
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p style={{ textTransform: "none" }}>
                      Penify automatically generates and updates your
                      GitHub project docstring whenever a pull request is
                      merged, ensuring your docstring is always current with
                      your codebase.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item content__space"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <h5 className="accordion-header" id="headingFour">
                  <button
                    type="button"
                    className={`${
                      imgTab === 3 ? "" : "collapsed"
                    } accordion-button`}
                    onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What is the difference b/w Penify and PyDoc?
                  </button>
                </h5>

                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse ${
                    imgTab === 3 ? "show" : ""
                  }`}
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p style={{ textTransform: "none" }}>
                      PyDoc is for Python only and can only generate Syntactic
                      Docstring while Penify generates human readable and
                      understandable docstring for languages like - Python,
                      JavaScript, Typescript, Java, and Kotlin.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <h5 className="accordion-header" id="headingTwo">
                  <button
                    type="button"
                    className={`${
                      imgTab === 1 ? "" : "collapsed"
                    } accordion-button`}
                    onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What programming languages are currently supported by
                    Penify for generating docstring?
                  </button>
                </h5>

                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse ${
                    imgTab === 1 ? "show" : ""
                  }`}
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p style={{ textTransform: "none" }}>
                      Penify currently provides support for the following
                      programming languages: Python, JavaScript, Typescript,
                      Java, and Kotlin.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item content__space"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <h5 className="accordion-header" id="headingThree">
                  <button
                    type="button"
                    className={`${
                      imgTab === 2 ? "" : "collapsed"
                    } accordion-button`}
                    onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Does Penify retain the code on a local server in order
                    to generate the docstring?
                  </button>
                </h5>

                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse ${
                    imgTab === 2 ? "show" : ""
                  }`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p style={{ textTransform: "none" }}>
                      No, Penify does not retain your code on local
                      storage. Contrary to tools like Sonar, it retrieves the
                      latest commit files and dynamically creates the docstring,
                      maintaining the security of your code within your GitHub
                      repository.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item content__space"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <h5 className="accordion-header" id="headingFour">
                  <button
                    type="button"
                    className={`${
                      imgTab === 3 ? "" : "collapsed"
                    } accordion-button`}
                    onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How does Penify handle inaccuracies in the
                    automatically generated docstring?
                  </button>
                </h5>

                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse ${
                    imgTab === 3 ? "show" : ""
                  }`}
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p style={{ textTransform: "none" }}>
                      If the docstring produced by Penify contains errors,
                      users can review and suggest corrections through the
                      generated pull request before it is merged. This ensures
                      that any inaccuracies can be addressed, and the docstring
                      remains accurate and reliable.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item content__space"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <h5 className="accordion-header" id="headingFour">
                  <button
                    type="button"
                    className={`${
                      imgTab === 4 ? "" : "collapsed"
                    } accordion-button`}
                    onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Details on Fees and Pricing?
                  </button>
                </h5>

                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse ${
                    imgTab === 4 ? "show" : ""
                  }`}
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p style={{ textTransform: "none" }}>
                      <a
                        className=""
                        href="https://www.penify.dev/?scrollTo=pricing"
                      >
                        Click here -
                      </a>{" "}
                      to get Pricing details on the website.
                      <br></br>
                      <a
                        className=""
                        href="https://www.penify.dev/?scrollTo=pricing"
                      >
                        Click here
                      </a> - to the Terms and Conditions on pricing.
                      <br></br>
                      <a
                        className=""
                        href="https://production-gateway.penify.dev/api/refund-policy"
                      >
                        Click here
                      </a> - To ge the Refund Policy details.
                      <br />
                      If you have any questions, you can always mail at - 
                      {" "}
                      <a
                        className=""
                        href="mailto: support@penify.dev"
                      >
                        support@penify.dev
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FAQ;