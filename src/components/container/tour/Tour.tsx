import { trackVideoStart } from "@/utils/gtag";
import React, { forwardRef, useEffect, useRef, useState } from "react";

// used function expression for working of scrolling effect
const Tour = forwardRef<HTMLDivElement>(function (_, ref) {
  const videoRef = useRef<HTMLDivElement>(null);
  const [autoplay, setAutoplay] = useState(false);

  // whenever scrolled within video view, autoplay is true
  // whenever scrolled outside video view, autoplay is false
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAutoplay(true);
            trackVideoStart(true);
          } else {
            setAutoplay(false);
            trackVideoStart(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    const observe = () => {
      if (videoRef.current) {
        obs.observe(videoRef.current);
      }
    };

    const unobserve = () => {
      if (videoRef.current) {
        obs.unobserve(videoRef.current);
      }
    };

    observe();

    return () => {
      unobserve();
    };
  }, []);

  return (
    <section className="section tour" ref={ref}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8">
            <div
              className="section__header"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h2 className="h2">
                Take a Quick Tour of Automated Documentation Generation
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tour__frame">
              <div className="frame__top">
                <div className="mac__btns">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6" cy="6" r="6" fill="#FF605C" />
                  </svg>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6"
                      cy="6"
                      r="6"
                      fill="#FFBD44"
                      fillOpacity="0.866667"
                    />
                  </svg>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6"
                      cy="6"
                      r="6"
                      fill="#00CA4E"
                      fillOpacity="0.866667"
                    />
                  </svg>
                </div>

                <div className="mac__title">
                  Snorkell.ai Documentation Generator
                </div>

                <div className="mac__code">
                  <svg
                    width="28"
                    height="18"
                    viewBox="0 0 28 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99967 2.33331L2.33301 8.48715L8.99967 15.6666M18.9997 2.33331L25.6663 8.48715L18.9997 15.6666"
                      stroke="#445268"
                      strokeWidth="3.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="frame__mid" ref={videoRef}>
              {autoplay ?(
                <iframe
                  loading="lazy"
                  src={`https://www.youtube.com/embed/s32GS0glydA?autoplay=${Number(
                    autoplay
                  )}&loop=1&rel=0&fs=0&playlist=s32GS0glydA`}
                  height="480"
                  title="Snorkell Trailer"
                ></iframe>
                ): false}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Tour;
