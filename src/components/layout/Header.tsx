import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import snorkellLogo from "public/asset/snorkell-dark-logo.svg";
import StatCount from "../container/banner/statCount";
import { axiosInstance } from "@/config/axiosConfig";

interface HeaderProps {
  isNavOpen: boolean;
  setIsNavOpen: (val: boolean) => void;
}

export default function Header({ isNavOpen, setIsNavOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [counter, setCounter] = useState({
    repos: 0,
    users: 0,
  });

  // window resize
  useEffect(() => {
    const handleResize = () => setIsNavOpen(false);
    window.addEventListener("resize", handleResize);
    axiosInstance
        .get("v1/analytics/usage/count")
        .then(({ data }) =>
          setCounter(() => ({ repos: data.repos, users: data.users }))
        );
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // window scrolled
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header header--dark ${isScrolled ? "header-active" : ""}`}>
      {!isScrolled ? <StatCount repos={counter.repos} users={counter.users}/> : null}
      <div className="container">
        <div className="row">
          
          <div className="col-lg-12">
            <div className="nav">
              <div className="nav__content">
                <div className="nav__logo">
                  <Link href="/">
                    <Image src={snorkellLogo} alt="snorkell.ai brand logo" priority />
                  </Link>
                </div>

                <div className={`nav__menu ${isNavOpen ? "nav__menu-active" : "" }`}>
                  <div className="nav__menu-logo d-flex d-xl-none">
                    <Link href="/" className="text-center hide-nav">
                      <Image src={snorkellLogo} alt="snorkell.ai brand logo" priority />
                    </Link>

                    <button type="button" aria-label="close the menu" className="nav__menu-close" onClick={() => setIsNavOpen(false)}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>

                  <ul className="nav__menu-items">
                    <li className="nav__menu-item">
                      <Link href="/" className="nav__menu-link hide-nav">Home</Link>
                    </li>

                    <li className="nav__menu-item">
                      <Link href="/about-us" className="nav__menu-link hide-nav">About Us</Link>
                    </li>

                    <li className="nav__menu-item">
                      <Link href="/?scrollTo=productOverview" scroll={false} className="nav__menu-link hide-nav">Product</Link>
                    </li>

                    <li className="nav__menu-item">
                      <Link href="/contact-us" className="nav__menu-link hide-nav">Contact Us</Link>
                    </li>

                    <li className="nav__menu-item d-block d-md-none">
                      <Link href="https://dashboard.snorkell.ai/" className="btn btn--secondary" target="_blank">
                        Dashboard
                      </Link>
                    </li>
                  </ul>

                  <div className="social">
                    <Link href="https://github.com/SingularityX-ai/" target="_blank">
                      <i className="fa-brands fa-github"></i>
                    </Link>

                    <Link href="https://www.linkedin.com/company/snorkell-ai/" target="_blank">
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  </div>
                </div>

                <div className="nav__uncollapsed">
                  <div className="nav__uncollapsed-item d-none d-md-flex">
                    <Link href="https://dashboard.snorkell.ai/" className="btn btn--secondary" target="_blank">
                      Dashboard
                    </Link>
                  </div>

                  <button type="button" className={`nav__bar d-block d-xl-none ${isNavOpen ? "nav__bar-toggle" : ""}`} onClick={() => setIsNavOpen(!isNavOpen)}>
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isNavOpen ? " backdrop-active" : ""} backdrop`} onClick={() => setIsNavOpen(false)}></div>
    </header>
  )
}
