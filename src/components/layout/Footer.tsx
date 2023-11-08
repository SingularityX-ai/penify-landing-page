import Image from "next/image";
import Link from "next/link";
import AnimeOne from "public/images/footer-anime-one.png";
import AnimeTwo from "public/images/footer-anime-two.png";
import snorkellLogo from "public/asset/snorkell-dark-logo.svg";

export default function Footer () {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="row items-gap-two">
        <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer__single" data-aos="fade-up" data-aos-duration="600">
              <Link href="/" className="logo">
                <Image src={snorkellLogo} alt="snorkell.ai brand logo" priority />
              </Link>

              <p>Copyright &copy; 2023 Snorkell.ai</p>

              <div className="social">
                <Link href="https://github.com/SingularityX-ai/" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </Link>

                <Link href="https://www.linkedin.com/company/snorkell-ai/" target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer__single" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
              <h5 className="h5">Our Products</h5>
              <ul>
                <li>
                  <Link href="https://github.com/apps/snorkell-ai" target="_blank">Doc Generator</Link>
                </li>
                
                <li>
                  <Link href="https://marketplace.visualstudio.com/items?itemName=Snorkell.snorkell" target="_blank">Coding Assistant</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer__single" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
              <h5 className="h5">About Us</h5>
              <ul>
                <li>
                  <Link href="/about-us" target="_self">About</Link>
                </li>
                
                <li>
                  <Link href="https://dashboard.snorkell.ai/auth/login" target="_blank">Sign In</Link>
                </li>

                <li>
                  <Link href="https://dashboard.snorkell.ai/auth/sign-up" target="_blank">Register</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer__single" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
              <h5 className="h5">Support</h5>
              <ul>
                <li>
                  <Link href="https://production-gateway.snorkell.ai/api/privacy-policy" target="_blank">Privacy Policy</Link>
                </li>
                
                <li>
                  <Link href="https://production-gateway.snorkell.ai/api/toc" target="_blank">Terms & Conditions</Link>
                </li>

                <li>
                  <Link href="/contact-us" target="_self">Helpdesk </Link>
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        <div className="anime">
          <Image src={AnimeOne} alt="Image" className="one" />
          <Image src={AnimeTwo} alt="Image" className="two" />
        </div>
      </div>
    </footer>
  )
}