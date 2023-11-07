import React from "react";

export default function Tour() {
  return (
    <section className="section tour">
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

              <p className="max-5">
                Watch this video to learn all about our AI and how to use it in
                your GitHub Repo&apos;s
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tour__frame">
              <div className="frame__top">
                <div className="mac__btns">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="6" fill="#FF605C"/></svg> 
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="6" fill="#FFBD44" fillOpacity="0.866667"/></svg> 
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="6" fill="#00CA4E" fillOpacity="0.866667"/></svg>
                </div>

                <div className="mac__title">
                  Snorkell.ai Documentation Generator
                </div>

                <div className="mac__code">
                  <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99967 2.33331L2.33301 8.48715L8.99967 15.6666M18.9997 2.33331L25.6663 8.48715L18.9997 15.6666" stroke="#445268" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/></svg> 
                </div>
              </div>

              <div className="frame__mid">
                <iframe height={480} src="https://www.youtube.com/embed/s32GS0glydA?&showinfo=0&rel=0&mute=0&controls=1" title="Snorkell Trailer" allow="accelerometer; encrypted-media; web-share"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};