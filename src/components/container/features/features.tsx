import { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import prReview from "@public/images/features/prReview.png";
import updateCode from "@public/images/features/updateCode.png";
import diffDocs from "@public/images/features/diffDocs.png";
import archDocs from "@public/images/features/archDocs.png";
import apiDocs from "@public/images/features/apiDocs.png";
import "swiper/css";
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react";

const FEATURES_ITEMS = [
  {
    title: "Pull Request Documentation",
    description: "Creates a summary of the Pull Request and Code review.",
    img: prReview,
    link: {
      title: null,
      url: null,
    },
    count: "01",
  },
  {
    title: "Automatic Documentation Update",
    description: `When a pull request is merged into the 'main/master' branch, a new pull request is generated containing the updated documentation for the modified code`,
    img: updateCode,
    link: {
      title: null,
      url: null,
    },
    count: "02",
  },
  {
    title: "Repository Documentation",
    description: "Generates code documentation for the entire Git repository.",
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
      "Generates an architecture diagram of your repository and create an HTML page hosted at a URL that displays how each module in your repository interacts with the others.",
    img: archDocs,
    link: {
      title: "Sample Arch Doc",
      url: "https://xeno-rat-snorkell-ai-6.netlify.app/",
    },
    count: "04",
  },
  {
    title: "API Documentation",
    description: "Generate an HTML page of your hosted Open APIs",
    img: apiDocs,
    link: {
      title: "Sample API Doc",
      url: "https://snorkell.apidocumentation.com/reference#tag/github_app/post/api/app/github/webhook",
    },
    count: "05",
  },
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
                  ({ title, description, img, link, count }) => (
                    <SwiperSlide key={`key-${crypto.randomUUID()}`}>
                      <div className="features__slider-single">
                        <div className="row items-gap">
                          <div className="col-12 col-md-6">
                            <div className="features__single-item">
                              <span className="tag">Feature {count}</span>
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
