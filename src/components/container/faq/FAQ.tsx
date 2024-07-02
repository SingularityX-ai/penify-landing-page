import { useState } from "react";
import React, { forwardRef } from "react";

const FAQ_ITEMS = [
  {
    title: "What is Penify (previously Snorkell.ai)?",
    description: `Penify automatically generates and updates your GitHub project docstrings 
      whenever a pull request is merged. This ensures your docstrings are always current 
      with your codebase.
      `,
    id: "One",
    count: 0,
  },
  {
    title: "What is the difference between Penify and PyDoc?",
    description: `PyDoc is exclusively for Python and can only generate syntactic docstrings. 
      In contrast, Penify generates human-readable and understandable docstrings for multiple 
      languages, including Python, JavaScript, TypeScript, Java, C#, and Kotlin.`,
    id: "Two",
    count: 1,
  },
  {
    title:
      "What programming languages are currently supported by Penify for generating docstrings?",
    description: `Penify currently supports the following programming languages: Python, 
      JavaScript, TypeScript, Java, C, CSharp and Kotlin.`,
    id: "Three",
    count: 2,
  },
  {
    title:
      "Does Penify retain the code on a local server in order to generate the docstrings?",
    description: `No, Penify does not retain your code on local storage. Unlike tools such 
      as Sonar, it retrieves the latest commit files and dynamically creates the docstrings, 
      ensuring the security of your code remains within your GitHub repository.`,
    id: "Four",
    count: 3,
  },
  {
    title:
      "How does Penify handle inaccuracies in the automatically generated docstrings?",
    description: `If the docstring produced by Penify contains errors, users can review and 
      suggest corrections through the generated pull request before it is merged. This process 
      ensures that any inaccuracies can be addressed, keeping the docstrings accurate and reliable.`,
    id: "Five",
    count: 4,
  },
  {
    title: "Details on Fees and Pricing?",
    description: `
      <a href="https://www.penify.dev/?scrollTo=pricing" style="color: #e6f85e;">Click here</a> to get details on pricing.
      <br />
      <a href="https://www.penify.dev/?scrollTo=pricing" style="color: #e6f85e;">Click here</a> to view the Terms and Conditions on pricing.
      <br />
      <a href="https://production-gateway.snorkell.ai/api/refund-policy" style="color: #e6f85e;">Click here</a> to read the Refund Policy.
      <br /> <br />
      If you have any questions, you can always email us at <a href="mailto:support@penify.dev" style="color: #e6f85e;">support@penify.dev</a>.
    `,
    id: "Six",
    count: 5,
  },
];

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
              {FAQ_ITEMS.map(({ title, description, id, count }, index) => (
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  key={index}
                >
                  <h5 className="accordion-header" id={`heading${id}`}>
                    <button
                      type="button"
                      className={`${
                        imgTab === count ? "" : "collapsed"
                      } accordion-button`}
                      onClick={() => setImgTab(imgTab === count ? -1 : count)}
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${id}`}
                      aria-expanded={count === count}
                      aria-controls={`collapse${id}`}
                    >
                      {title}
                    </button>
                  </h5>

                  <div
                    id={`collapse${id}`}
                    className={`accordion-collapse collapse ${
                      imgTab === count ? "show" : ""
                    }`}
                    aria-labelledby={`heading${id}`}
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p
                        style={{ textTransform: "none" }}
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FAQ;
