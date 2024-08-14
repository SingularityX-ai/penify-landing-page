import Image from "next/image";
import Link from "next/link";
import logo from "public/penify-logo.svg";
import { footerItems, socialIcons } from "@/utils/footerItems";
import { Fragment } from "react";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="inline-block">
              <Image src={logo} className="w-full h-10" alt="Penify Logo" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 w-full md:w-4/5">
            {footerItems.map(({ title, children }, footerIndex) => (
              <div key={`footer-menu-${footerIndex}`}>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                  {title}
                </h2>

                <ul className="font-medium text-gray-500">
                  {children.map(({ title, href, mode }, childIndex) => (
                    <li
                      key={`footer-sub-menu-${childIndex}`}
                      className="mb-4 last:mb-0"
                    >
                      {mode === "external" ? (
                        <Link
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {title}
                        </Link>
                      ) : (
                        <Link href={href} className="hover:underline">
                          {title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between sm:flex-wrap">
          <p className="text-sm text-gray-500 sm:text-center">
            © 2023 Snorkell Associates and Co. All Rights Reserved.
          </p>

          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            {socialIcons.map(({ title, icon, href }, socialIconIndex) => (
              <Fragment key={`social-icon-${socialIconIndex}`}>
                <Link
                  href={href}
                  className="text-gray-500 hover:text-gray-900 mx-3"
                >
                  {icon}

                  <span className="sr-only">{title}</span>
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
