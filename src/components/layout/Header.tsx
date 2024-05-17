import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import snorkellLogo from "@public/asset/snorkell-dark-logo.svg";
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
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubMenu = (submenu: string) => {
    setOpenSubMenu(submenu === openSubMenu ? null : submenu);
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? "nav__dropdown-active" : "";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? "nav__menu-link--dropdown-active" : "";
  };

  useEffect(() => {
    const handleResize = () => {
      setIsNavOpen(false);
      setOpenSubMenu(null);
    };

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Fetch data on component mount
    axiosInstance.get("v1/analytics/usage/count").then(({ data }) => setCounter(data));

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header header--dark ${isScrolled ? "header-active" : ""}`}>
      {!isScrolled ? <StatCount repos={counter.repos} users={counter.users} /> : null}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="nav">
              <div className="nav__content">
                <div className="nav__logo">
                  <Link href="/" aria-label="Penify brand logo">
                    <Image src={snorkellLogo} width="140" alt="penify.dev brand logo" priority />
                  </Link>
                </div>

                <div className={`nav__menu ${isNavOpen ? "nav__menu-active" : ""}`}>
                  <div className="nav__menu-logo d-flex d-xl-none">
                    <Link href="/" className="text-center hide-nav" aria-label="Penify brand logo">
                      <Image src={snorkellLogo}  width="140" alt="penify.dev brand logo" priority />
                    </Link>

                    <button type="button" aria-label="close the menu" className="nav__menu-close" onClick={() => setIsNavOpen(false)}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>

                  <ul className="nav__menu-items">
                    <li className="nav__menu-item">
                      <Link href="/" className="nav__menu-link hide-nav" aria-label="Home">
                        Home
                      </Link>
                    </li>

                    <li className="nav__menu-item">
                      <Link href="/about-us" className="nav__menu-link hide-nav" aria-label="About Us">
                        About Us
                      </Link>
                    </li>

                    <li className="nav__menu-item">
                      <Link href="/?scrollTo=pricing" className="nav__menu-link hide-nav" aria-label="About Us">
                        Pricing
                      </Link>
                    </li>

                    <li className="nav__menu-item nav__menu-item--dropdown">
                      <button className={`${isSubMenuButton("resources")} nav__menu-link nav__menu-link--dropdown`} onClick={() => handleSubMenu("resources")}>
                        Resources
                      </button>

                      <div className={`${isSubMenuOpen("resources")} nav__dropdown`}>
                        <ul>
                          <li>
                            <Link href="https://docs.penify.dev/" className="nav__dropdown-item hide-nav" target="_blank" rel="noopener noreferrer">
                              Docs
                            </Link>
                          </li>

                          <li>
                            <Link href="https://blogs.penify.dev/" className="nav__dropdown-item hide-nav" target="_blank" rel="noopener noreferrer">
                              Blogs
                            </Link>
                          </li>

                          <li>
                            <Link href="/?scrollTo=exampleOverview" className="nav__dropdown-item hide-nav">
                              Examples
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav__menu-item">
                      <Link href="/contact-us" className="nav__menu-link hide-nav" aria-label="Contact Us">
                        Contact Us
                      </Link>
                    </li>

                    <li className="nav__menu-item d-block d-md-none">
                      <Link href="https://dashboard.penify.dev/" className="btn btn--secondary" target="_blank" aria-label="Dashboard">
                        Dashboard
                      </Link>
                    </li>
                  </ul>

                  <div className="social">
                    <Link href="https://github.com/SingularityX-ai/" target="_blank" aria-label="Github">
                      <i className="fa-brands fa-github"></i>
                    </Link>

                    <Link href="https://www.linkedin.com/company/snorkell-ai/" target="_blank" aria-label="LinkedIn">
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  </div>
                </div>

                <div className="nav__uncollapsed">
                  <div className="nav__uncollapsed-item d-none d-md-flex">
                    <Link href="https://dashboard.penify.dev/" className="btn btn--secondary" target="_blank" aria-label="Dashboard">
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
  );
}
