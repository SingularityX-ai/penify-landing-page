import { featureItems } from "@/utils/featureItems";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <section className="w-full pt-24 pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h3 className="m-2 mb-4 inline-flex rounded-full bg-green-200 px-3 py-1 text-xs md:text-sm font-semibold text-green-600">
            Reach goals that matter
          </h3>

          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4">
            One product, unlimited solutions
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-400">
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
                  className={`w-full mb-8 md:col-span-5 md:mb-0 lg:col-span-6 ${
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
                      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                        {title}
                      </h2>

                      {href && (
                        <Link
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg bg-blue-700 px-3 py-1 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 inline-flex items-center justify-center gap-x-1 "
                        >
                          <IconExternalLink width={14} />
                          View Demo
                        </Link>
                      )}
                    </div>
                    <p className="mb-4 text-sm md:text-base text-gray-400">
                      {text}
                    </p>

                    <ul className="-mb-2 text-sm md:text-base text-gray-400">
                      {children.map((child, childIndex) => (
                        <li
                          className="mb-2 ps-5 relative feature-list"
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
    </section>
  );
}
