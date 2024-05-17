import Image from "next/image";
import Link from "next/link";
import AnimeOne from "@public/images/footer-anime-one.png";
import AnimeTwo from "@public/images/footer-anime-two.png";
import snorkellLogo from "@public/asset/snorkell-dark-logo.svg";
import { Fragment } from "react";

export default function Footer() {
  const footerData = {
    socials: [
      {
        link: "https://github.com/SingularityX-ai/",
        title: "GitHub",
        icon: "fa-github",
      },
      {
        link: "https://twitter.com/Snorkell_ai",
        title: "Twitter",
        icon: "fa-twitter",
      },
      {
        link: "https://www.youtube.com/@Snorkell-ai-ck6sg",
        title: "Youtube",
        icon: "fa-youtube",
      },
      {
        link: "https://www.reddit.com/user/snorkell_/",
        title: "Reddit",
        icon: "fa-reddit",
      },
      {
        link: "https://www.linkedin.com/company/snorkell-ai/",
        title: "LinkedIn",
        icon: "fa-linkedin",
      },
      {
        link: "https://www.instagram.com/penify.dev/",
        title: "Instagram",
        icon: "fa-instagram",
      },
    ],

    supports: [
      {
        link: "https://production-gateway.snorkell.ai/api/toc",
        title: "Terms & Conditions",
      },
      {
        link: "https://production-gateway.penify.dev/api/privacy-policy",
        title: "Privacy Policy",
      },
      {
        link: "https://production-gateway.snorkell.ai/api/toc#fees-and-pricing",
        title: "Pricing Policy",
      },
      {
        link: "https://production-gateway.penify.dev/api/refund-policy",
        title: "Refund & Cancellation",
      },
    ],
  };
  return (
    <footer className="footer section">
      <div className="container">
        <div className="row items-gap-two">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer__single" data-aos="fade-up" data-aos-duration="600">
              <Link href="/" className="logo" aria-label="Penify brand logo">
                <Image src={snorkellLogo} alt="penify.dev brand logo" loading="lazy" />
              </Link>

              <p>Copyright &copy; 2023 Snorkell Associates and Co.</p>

              <div className="social" style={{ maxWidth: "200px", flexWrap: "wrap" }}>
                {footerData.socials.map(({ link, title, icon }) => (
                  <Fragment key={title}>
                    <Link href={link} target="_blank" rel="noopener noreferrer" title={`${title} URL`} aria-label={`${title} URL`}>
                      <i className={`fa-brands ${icon}`}></i>
                    </Link>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer__single" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
              <h6 className="h5">Resources</h6>
              <ul>
                <li>
                  <Link href="https://docs.penify.dev/" target="_blank" aria-label="Privacy Policy">
                    Docs
                  </Link>
                </li>

                <li>
                  <Link href="https://blogs.penify.dev/" target="_blank" aria-label="Terms & Conditions">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer__single" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
              <h6 className="h5">About Us</h6>
              <ul>
                <li>
                  <Link href="/about-us" target="_self" aria-label="About Us">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="https://dashboard.penify.dev/auth/login" target="_blank" aria-label="Sign In to Dashboard">
                    Sign In
                  </Link>
                </li>

                <li>
                  <Link href="https://dashboard.penify.dev/auth/sign-up" target="_blank" aria-label="Register">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer__single" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
              <h6 className="h5">Support</h6>
              <ul>
                {footerData.supports.map(({ link, title }) => (
                  <li key={title}>
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                      {title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact-us">Helpdesk</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="anime">
          <Image src={AnimeOne} alt="animate background" className="one" loading="lazy" />
          <Image src={AnimeTwo} alt="animate background" className="two" loading="lazy" />
        </div>
      </div>
    </footer>
  );
}
