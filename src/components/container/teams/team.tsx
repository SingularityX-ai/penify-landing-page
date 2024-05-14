import Image from "next/image";
import sumanImg from "@public/images/teams/suman.jpeg";
import sunilImg from "@public/images/teams/sunil.jpeg";
import popinImg from "@public/images/teams/popin.jpeg";
import mayurImg from "@public/images/teams/mayur.jpeg";

const TeamsContent = [
  {
    img: sumanImg,
    devName: "Suman Saurabh",
    devRole: "Co-Founder",
    // devSocial: null,
    devSocial: "ssumansaurabh",
  },
  {
    img: sunilImg,
    devName: "Sunil Agarwal",
    devRole: "Co-Founder",
    // devSocial: null,
    devSocial: "sunilagwl5",
  },
  {
    img: popinImg,
    devName: "Popin Bose Roy",
    devRole: "Co-Founder",
    // devSocial: null,
    devSocial: "popinboseroy",
  },
  {
    img: mayurImg,
    devName: "Mayur Dayal",
    devRole: "Frontend Developer",
    // devSocial: null,
    devSocial: "mayur-dayal",
  },
];

export default function Teams() {
  return (
    <section className="section team-main pb-0">
      <div className="container pb-5">
        <h2 className="section-title text-center pb-2">Our Mission</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 ">
            <p
              style={{
                fontFamily: '"Roboto", sans-serif',
                fontSize: "18px",
                lineHeight: "1.6",
                fontWeight: "400",
                textAlign: "justify",
              }}
            >
              At Snorkell.ai, we are creating a GitHub App to automate
              and streamline the documentation process for developers and teams.
              Powered by Large Language Models, it ensures that project
              docstrings is always up-to-date, consistent, and accurately
              reflects the latest code changes. Our mission is to save
              developers time, reduce onboarding complexity, and maintain
              clarity across projects, making software development smoother and
              more efficient for everyone involved.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="section-title text-center pb-2">Our Team</h2>
        <div className="row g-4">
          {TeamsContent.map((team, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div
                className="colored-card"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 200}
              >
                <div className="card-img-center">
                  <Image
                    src={team.img}
                    width={200}
                    height={200}
                    alt={`Profile photo of ${team.devName}`}
                    priority
                  />
                </div>

                <div
                  className={` card-content-wrapper ${
                    !team.devSocial ? "link-disabled" : ""
                  }`}
                >
                  <div className="card-content">
                    <div className="card-devData">
                      <h3 className="h5 mb-1">{team.devName}</h3>
                      <p className="text-muted">{team.devRole}</p>
                    </div>

                    {team.devSocial ? (
                      <a
                        href={`https://www.linkedin.com/in/${team.devSocial}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="socials"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
