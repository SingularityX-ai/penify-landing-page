import React from "react";
import Image from "next/image";
import One from "public/images/icons/overview-one.png";
import Two from "public/images/icons/overview-two.png";

export default function OverviewTop () {
  return (
    <div className="overview">
      <div className="container">
        <div className="row items-gap justify-content-center">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="overview__single" data-aos="fade-up" data-aos-duration="600">
              <Image src={One} priority alt="Image" />
              <p className="h6">Automated Documentation</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="overview__single" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
              <Image src={Two} priority alt="Image" />
              <p className="h6">Coding Assistant Extension</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
