import Image from "next/image";
import Link from "next/link";
import logo from "public/penify-logo.svg";
import { footerItems, socialIcons } from "@/utils/footerItems";
import { Fragment } from "react";

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-transparent py-8 md:py-16 xl:py-24">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                className="xl:h-13 h-9 w-full md:h-11"
                alt="Penify Logo"
              />
            </Link>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:w-4/5 md:grid-cols-3">
            {footerItems.map(({ title, children }, footerIndex) => (
              <div key={`footer-menu-${footerIndex}`}>
                <h2 className="mb-6 text-sm font-semibold uppercase text-slate-200 md:text-base xl:text-lg">
                  {title}
                </h2>

                <ul className="font-medium text-slate-300">
                  {children.map(({ title, href, mode }, childIndex) => (
                    <li
                      key={`footer-sub-menu-${childIndex}`}
                      className="mb-4 last:mb-0 text-xs md:text-sm xl:text-base"
                    >
                      {mode === "external" ? (
                        <Link
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block transition-all duration-200 ease-in hover:translate-x-2 hover:text-blue-700 hover:underline"
                        >
                          {title}
                        </Link>
                      ) : (
                        <Link
                          href={href}
                          className="inline-block transition-all duration-200 ease-in hover:translate-x-2 hover:text-blue-700 hover:underline"
                        >
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

        <hr className="my-6 border-slate-600 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-center md:justify-between">
          <p className="text-sm text-slate-400 sm:text-center md:text-base xl:text-lg">
            © 2023 Snorkell Associates and Co. All Rights Reserved.
          </p>

          <div className="mt-4 flex sm:justify-center md:mt-0">
            {socialIcons.map(({ title, icon, href }, socialIconIndex) => (
              <Fragment key={`social-icon-${socialIconIndex}`}>
                <Link
                  href={href}
                  className="mx-3 text-slate-400 hover:text-slate-500"
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
