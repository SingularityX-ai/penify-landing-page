import { menus } from "@/utils/menuItems";
import { IconChevronDown, IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/penify-logo.svg";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  return (
    <nav className="sticky start-0 top-0 z-20 w-full border-b border-gray-100 bg-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/">
          <Image
            src={logo}
            className="h-12 w-full"
            alt="Penify Logo"
            priority
          />
        </Link>

        <div className="flex space-x-3 lg:order-2 lg:space-x-0">
          <Link
            href="https://dashboard.penify.dev/"
            className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-blue-300 transition-all ease-in duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden transition-all ease-in duration-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <IconMenu2 />
          </button>
        </div>

        <div
          className={`w-full items-center justify-between lg:order-1 lg:flex lg:w-auto ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:bg-white lg:p-0">
            {menus.map(({ title, href, children }, menuIndex) => (
              <li key={`menu-${menuIndex}`} className="lg:relative">
                {href ? (
                  <Link
                    href={href}
                    className="block rounded px-3 py-2 hover:bg-gray-200 lg:bg-transparent hover:bg-transparent lg:p-0 lg:text-gray-900 hover:lg:text-blue-700 capitalize transition-colors ease-in duration-150"
                  >
                    {title}
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-3 py-2 text-gray-900 hover:bg-gray-200 lg:w-auto lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-blue-700 transition-all ease-in duration-200"
                      aria-expanded={isSubMenuOpen}
                      onClick={() => setIsSubMenuOpen((prev) => !prev)}
                    >
                      {title}
                      <IconChevronDown />
                    </button>

                    <div
                      className={`z-10 w-full divide-y divide-gray-100 rounded-lg bg-white font-normal shadow lg:absolute my-2  ${
                        isSubMenuOpen ? "" : "hidden"
                      }`}
                    >
                      <ul className="py-2 text-sm text-gray-700">
                        {children &&
                          children.map(({ title, href }, childIndex) => (
                            <li key={`sub-menu-${childIndex}`}>
                              <Link
                                href={href}
                                className="block px-4 py-2 hover:bg-gray-100 transition-all ease-in duration-200"
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
