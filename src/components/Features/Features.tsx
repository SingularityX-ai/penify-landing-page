import { featureItems } from "@/utils/featureItems";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";

export default function Features() {
  return (
    <section>
      <Element
        name="features"
        id="features"
        className="w-full py-8 overflow-hidden md:py-16 xl:py-24 bg-bannerBg"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h3 className="m-2 mb-4 inline-flex rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-600 md:text-sm">
              Reach goals that matter
            </h3>

            <h1 className="mb-4 text-2xl font-bold text-slate-200 md:text-3xl xl:text-4xl">
              One product, unlimited solutions
            </h1>
            <p className="text-sm text-slate-400 md:text-base lg:text-lg">
              Streamline documentation across your entire development lifecycle
              with AI-powered automation for code, APIs, and architecture.
            </p>
          </div>

          <div className="grid gap-20">
            {featureItems.map(
              ({ title, text, href, img, children }, featureIndex) => (
                <div
                  className="items-center md:grid md:grid-cols-12 md:gap-6"
                  key={`feature-items-${featureIndex}`}
                >
                  <div
                    className={`mb-8 w-full md:col-span-5 md:mb-0 lg:col-span-6 ${
                      featureIndex % 2 === 0 ? "md:order-1" : ""
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${title} illustration`}
                      width={540}
                      loading="lazy"
                      className="mx-auto"
                    />
                  </div>

                  <div className="w-full md:col-span-7 md:max-w-none lg:col-span-6">
                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                      <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-2">
                        <h2 className="text-xl font-semibold text-slate-200 md:text-2xl xl:text-3xl">
                          {title}
                        </h2>

                        {href && (
                          <Link
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-x-1 rounded-lg bg-blue-700 px-3 py-1 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:text-sm"
                          >
                            <IconExternalLink width={14} />
                            View Demo
                          </Link>
                        )}
                      </div>
                      <p className="mb-4 text-sm text-slate-400 md:text-base lg:text-lg">
                        {text}
                      </p>

                      <ul className="-mb-2 text-sm text-slate-400 md:text-base">
                        {children.map((child, childIndex) => (
                          <li
                            className="feature-list relative mb-2 ps-5"
                            key={`feature-child-${childIndex}`}
                          >
                            {child}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Element>
    </section>
  );
}
