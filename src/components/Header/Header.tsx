import { menus } from "@/utils/menuItems";
import { IconChevronDown, IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/penify-logo.svg";
import { useState } from "react";
import { Scroller as ScrollerLink } from "../Scroller/Scroller";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-themeBg sticky start-0 top-0 z-20 w-full py-4 shadow-lg md:py-6">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <Link href="/">
          <Image
            src={logo}
            className="h-10 w-full md:h-12 xl:h-14"
            alt="Penify Logo"
            priority
          />
        </Link>

        <div className="flex space-x-3 lg:order-2 lg:space-x-0">
          <Link
            href="https://dashboard.penify.dev/"
            className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2 text-center text-sm font-medium text-white transition-all duration-200 ease-in hover:bg-blue-800 focus:outline-none focus:ring-blue-300 md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 transition-all duration-200 ease-in hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 md:h-12 md:w-12 lg:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <IconMenu2 className="md:w-7 md:h-7" />
          </button>
        </div>

        <div
          className={`w-full items-center justify-between lg:order-1 lg:flex lg:w-auto ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:bg-transparent lg:p-0">
            {menus.map(({ title, href, scroller, children }, menuIndex) => (
              <li key={`menu-${menuIndex}`} className="lg:relative">
                {href ? (
                  scroller ? (
                    <ScrollerLink id={href.slice(1)} title={title} />
                  ) : (
                    <Link
                      href={href}
                      className="block rounded px-3 py-2 text-sm capitalize text-gray-800 transition-colors duration-150 ease-in hover:bg-gray-200 hover:text-blue-700 md:text-base lg:text-lg lg:bg-transparent lg:p-0 lg:text-white lg:hover:bg-transparent hover:lg:text-blue-700"
                    >
                      {title}
                    </Link>
                  )
                ) : (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-3 py-2 text-sm text-gray-800 transition-all duration-200 ease-in hover:bg-gray-200 hover:text-blue-700 md:text-base lg:text-lg lg:w-auto lg:border-0 lg:p-0 lg:text-white lg:hover:bg-transparent lg:hover:text-blue-700"
                      aria-expanded={isSubMenuOpen}
                      onClick={() => setIsSubMenuOpen((prev) => !prev)}
                    >
                      {title}
                      <IconChevronDown />
                    </button>

                    <div
                      className={`z-10 my-2 w-full divide-y divide-gray-100 rounded-lg bg-white font-normal shadow lg:absolute  ${
                        isSubMenuOpen ? "" : "hidden"
                      }`}
                    >
                      <ul className="py-2 text-sm font-medium">
                        {children &&
                          children.map(({ title, href }, childIndex) => (
                            <li key={`sub-menu-${childIndex}`}>
                              <Link
                                href={href}
                                className="block rounded px-3 py-2 capitalize text-gray-800 transition-colors duration-150 ease-in hover:bg-gray-200 hover:text-blue-700"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
