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
              <Link href="/" className="logo" aria-label="Snorkell brand logo">
                <Image src={snorkellLogo} alt="snorkell.ai brand logo" loading="lazy" />
              </Link>

              <p>Copyright &copy; 2023 Snorkell Associates and Co.</p>

              <div className="social">
                <Link href="https://github.com/SingularityX-ai/" target="_blank" aria-label="Github URL">
                  <i className="fa-brands fa-github"></i>
                </Link>

                <Link href="https://www.linkedin.com/company/snorkell-ai/" target="_blank" aria-label="LinkedIn URL">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link href="https://twitter.com/Snorkell_ai" target="_blank" aria-label="Twitter URL">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link href="https://www.reddit.com/user/snorkell_" target="_blank" aria-label="Reddit URL">
                  <i className="fa-brands fa-reddit"></i>
                </Link>
                <Link href="https://www.instagram.com/snorkell.ai/" target="_blank" aria-label="Instagram URL">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link href="https://www.youtube.com/@Snorkell-ai-ck6sg" target="_blank" aria-label="Youtube URL">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer__single" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
              <h6 className="h5">Resources</h6>
              <ul>
                <li>
                  <Link href="https://docs.snorkell.ai/" target="_blank" aria-label="Privacy Policy">Docs</Link>
                </li>
                
                <li>
                  <Link href="https://blogs.snorkell.ai/" target="_blank" aria-label="Terms & Conditions">Blogs</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer__single" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
              <h6 className="h5">About Us</h6>
              <ul>
                <li>
                  <Link href="/about-us" target="_self" aria-label="About Us" >About Us</Link>
                </li>
                
                <li>
                  <Link href="https://dashboard.snorkell.ai/auth/login" target="_blank" aria-label="Sign In to Dashboard">Sign In</Link>
                </li>

                <li>
                  <Link href="https://dashboard.snorkell.ai/auth/sign-up" target="_blank" aria-label="Register">Register</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer__single" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
              <h6 className="h5">Support</h6>
              <ul>
                <li>
                  <Link href="https://production-gateway.snorkell.ai/api/toc" target="_blank" aria-label="Terms & Conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="https://production-gateway.snorkell.ai/api/privacy-policy" target="_blank" aria-label="Privacy Policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="https://production-gateway.snorkell.ai/api/toc#fees-and-pricing" target="_blank" aria-label="Refund and Cancellation Policy">Pricing Policy</Link>
                </li>
                <li>
                  <Link href="https://production-gateway.snorkell.ai/api/refund-policy" target="_blank" aria-label="Refund and Cancellation Policy">Refund & Cancellation</Link>
                </li>


                <li>
                  <Link href="/contact-us" target="_self" aria-label="Helpdesk">Helpdesk </Link>
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        <div className="anime">
          <Image src={AnimeOne} alt="animate background" className="one" loading="lazy"/>
          <Image src={AnimeTwo} alt="animate background" className="two" loading="lazy" />
        </div>
      </div>
    </footer>
  )
}