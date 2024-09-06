import { menus } from "@/utils/menuItems";
import { IconChevronDown, IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/penify-logo.svg?url";
import { useEffect, useState } from "react";
import { Scroller as ScrollerLink } from "../Scroller/Scroller";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [shouldMenuRender, setShouldMenuRender] = useState<boolean>(false);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const [shouldSubMenuRender, setShouldSubMenuRender] =
    useState<boolean>(false);

  useEffect(() => {
    if (isMenuOpen) {
      setShouldMenuRender(true);
    } else {
      const timeoutId = setTimeout(() => setShouldMenuRender(false), 200);
      return () => clearTimeout(timeoutId);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isSubMenuOpen) {
      setShouldSubMenuRender(true);
    } else {
      const timeoutId = setTimeout(() => setShouldSubMenuRender(false), 200);
      return () => clearTimeout(timeoutId);
    }
  }, [isSubMenuOpen]);

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
            Dashboard
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
          className={`${
            isMenuOpen
              ? "ease-out duration-300 opacity-100 translate-y-0 my-2"
              : "ease-in duration-200 opacity-0 -translate-y-2"
          } w-full transform items-center justify-between lg:order-1 lg:flex lg:w-auto lg:translate-y-0 lg:opacity-100 `}
        >
          <ul
            className={`${
              shouldMenuRender ? "block" : "hidden"
            } mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium lg:mt-0 lg:flex lg:flex-row lg:space-x-8 lg:border-0 lg:bg-transparent lg:p-0`}
          >
            {menus.map(({ title, href, scroller, children }, menuIndex) => (
              <li key={`menu-${menuIndex}`} className="lg:relative">
                {href ? (
                  scroller ? (
                    <ScrollerLink id={href.slice(1)} title={title} />
                  ) : (
                    <Link
                      href={href}
                      className="block rounded px-3 py-2 text-sm capitalize text-gray-800 transition-colors duration-150 ease-in hover:bg-gray-200 hover:text-blue-600 md:text-base lg:text-lg lg:bg-transparent lg:p-0 lg:text-white lg:hover:bg-transparent hover:lg:text-blue-400"
                    >
                      {title}
                    </Link>
                  )
                ) : (
                  <>
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between px-3 py-2 text-sm text-gray-800 transition-all duration-200 ease-in hover:bg-gray-200 hover:text-blue-600 md:text-base lg:w-auto lg:border-0 lg:p-0 lg:text-lg lg:text-white lg:hover:bg-transparent lg:hover:text-blue-400 ${
                        isSubMenuOpen
                          ? "bg-gray-200 lg:bg-transparent lg:text-blue-400"
                          : "bg-transparent lg:text-white"
                      }`}
                      aria-expanded={isSubMenuOpen}
                      onClick={() => setIsSubMenuOpen((prev) => !prev)}
                    >
                      {title}
                      <span
                        className={`${
                          isSubMenuOpen ? "rotate-180" : "rotate-0"
                        } transition-transform`}
                      >
                        <IconChevronDown />
                      </span>
                    </button>

                    <div
                      className={`${
                        isSubMenuOpen
                          ? "my-2 translate-y-0 opacity-100 duration-300 ease-out"
                          : "-translate-y-2 opacity-0 duration-200 ease-in"
                      } z-10 w-full transform divide-y divide-gray-100 rounded-lg bg-white font-normal shadow lg:absolute`}
                    >
                      <ul
                        className={`py-2 text-sm font-medium ${
                          shouldSubMenuRender ? "block" : "hidden"
                        }`}
                      >
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
