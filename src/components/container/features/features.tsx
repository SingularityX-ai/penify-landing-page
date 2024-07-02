import { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import prReview from "@public/images/features/prReview.webp";
import diffDocs from "@public/images/features/diffDocs.webp";
import archDocs from "@public/images/features/archDocs.webp";
import apiDocs from "@public/images/features/apiDocs.webp";
import hosting from "@public/images/features/hosting.webp";
import multiLanguage from "@public/images/features/multiLanguage.webp";
import "swiper/css";
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react";

const FEATURES_ITEMS = [
  {
    title: "Pull Request Documentation",
    "description": "Penify automates the creation of comprehensive summaries for Pull Requests and Code Reviews. It analyzes the changes made in the code, identifies key modifications, and generates a detailed summary. This tool ensures that all stakeholders have a clear understanding of the changes without having to dive deep into the code themselves.",
    img: prReview,
    link: {
      title: "Pull Request Documentation",
      url: "https://github.com/Snorkell-ai/pokerogue/pull/5",
    },
    count: "01",
  },
  {
    title: "Git Commit - Documentation Update",
    "description": "Penify ensure that when a pull request is merged into the 'main/master' branch, a new pull request is automatically generated to update the documentation corresponding to the modified code. It scans the changes made in the merged pull request, identifies any alterations that affect the documentation, and generates a Pull Request with updated Documentation. This ensures that documentation is always in sync with the codebase.",
    img: diffDocs,
    link: {
      title: "Git Commit Documentation",
      url: "https://github.com/Snorkell-ai/pokerogue/pull/1/files",
    },
    count: "02",
  },
  {
    title: "Repository Documentation",
    description:  "This feature generates comprehensive code documentation for the entire Git repository. It thoroughly analyzes the codebase, including all files and directories, to create detailed and organized documentation.",
    img: diffDocs,
    link: {
      title: "Sample PR",
      url: "https://github.com/Snorkell-ai/xeno-rat/pull/7/files",
    },
    count: "03",
  },
  {
    title: "Architecture Documentation",
    description:
      "This feature generates an architecture diagram of your repository and creates an HTML page hosted at a URL that displays how each module in your repository interacts with the others. It provides a high-level overview of the system's structure, highlighting the relationships and dependencies between different components. It is particularly useful for onboarding new team members and for conducting thorough code reviews.",
    img: archDocs,
    link: {
      title: "Sample Arch Doc",
      url: "https://xeno-rat-snorkell-ai-6.netlify.app/",
    },
    count: "04",
  },
  {
    title: "API Documentation",
    "description": "This feature generates an HTML page for your hosted Open APIs, providing a comprehensive and interactive documentation site. It details all available endpoints, request parameters, response formats, and authentication methods, and code blocks, making it easier for developers to integrate with your APIs. The documentation is auto-generated and continuously updated to reflect the latest changes in the API.",
    img: apiDocs,
    link: {
      title: "Sample API Doc",
      url: "https://snorkell.apidocumentation.com/reference#tag/github_app/post/api/app/github/webhook",
    },
    count: "05",
  },
  {
    title: "Automated Hosting",
    "description": "API Documentation and Architecture Documentation are hosted on a public URL. This allows you to share the documentation with your team members, stakeholders, and clients without any additional setup. The documentation is continuously updated to reflect the latest changes in the codebase, ensuring that everyone has access to the most up-to-date information.",
    img: hosting,
    link: {
      title: null,
      url: null
    },
    count: "05",
  },
  {
    title: "Multiple Languages Support",
    "description": "Penify supports multiple programming languages, including Python, JavaScript, Java, Typscript, C, CSharp and Kotlin. It can analyze code written in different languages and generate comprehensive documentation for each of them. This feature ensures that Penify can be used across different projects and teams, regardless of the programming languages they use.",
    img: multiLanguage,
    link: {
      title: null,
      url: null,
    },
    count: "05",
  }
];

const Features = forwardRef<HTMLDivElement>(function (_, ref) {
  return (
    <section className="section features" ref={ref}>
      <div className="feature-wrapper">
        <div className="container" data-aos="fade-up" data-aos-duration="600">
          <div className="row justify-content-center">
            <div className="col-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={1200}
                loop={true}
                roundLengths={true}
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 3000 }}
                navigation={{
                  nextEl: ".next-feature",
                  prevEl: ".prev-feature",
                }}
                pagination={false}
                className="features__slider"
              >
                {FEATURES_ITEMS.map(
                  ({ title, description, img, link }) => (
                    <SwiperSlide key={`key-${crypto.randomUUID()}`}>
                      <div className="features__slider-single">
                        <div className="row items-gap">
                          <div className="col-12 col-md-6">
                            <div className="features__single-item">
                              <div className="content">
                                <h2 className="h2">{title}</h2>
                                <p>{description}</p>
                                {link.title && (
                                  <Link
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {link.title}
                                    <span>
                                      <IconArrowUpRight />
                                    </span>
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-md-6">
                            <div className="feature__thumb">
                              <Image src={img} alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>

              <div className="feature__arrows">
                <button
                  aria-label="previous slide"
                  className="slide-btn prev-feature"
                >
                  <IconArrowLeft />
                </button>
                <button
                  aria-label="next slide"
                  className="slide-btn next-feature"
                >
                  <IconArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Features;
