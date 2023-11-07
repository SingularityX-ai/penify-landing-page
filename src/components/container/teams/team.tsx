import Image from "next/image";
import Link from "next/link";
import usrImg from "public/images/teams/one.png";

export default function Teams () {
  return (
    <section className="section team-main pb-0">
      <div className="container">
        <div className="row items-gap">
          
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-main-single" data-aos="fade-up" data-aos-duration="600">
              <div className="thumb">
                <Image src={usrImg} alt="profile image" />

                <div className="social">
                  <Link href="https://www.linkedin.com/in/ssumansaurabh/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </div>

                <div className="content">
                  <h5 className="h5">Suman Saurabh</h5>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-main-single" data-aos="fade-up" data-aos-duration="600">
              <div className="thumb">
                <Image src={usrImg} alt="profile image" />

                <div className="social">
                  <Link href="https://www.linkedin.com/in/sunilagwl5/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </div>

                <div className="content">
                  <h5 className="h5">Sunil Agarwal</h5>
                  <p>Backend Engineer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-main-single" data-aos="fade-up" data-aos-duration="600">
              <div className="thumb">
                <Image src={usrImg} alt="profile image" />

                <div className="social">
                  <Link href="https://www.linkedin.com/in/popinboseroy/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </div>

                <div className="content">
                  <h5 className="h5">Popin Bose Roy</h5>
                  <p>Product Management</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-main-single" data-aos="fade-up" data-aos-duration="600">
              <div className="thumb">
                <Image src={usrImg} alt="profile image" />

                <div className="social">
                  <Link href="https://www.linkedin.com/in/mayur-dayal/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </div>

                <div className="content">
                  <h5 className="h5">Mayur Dayal</h5>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}