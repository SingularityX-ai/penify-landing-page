import { testimonialLogos, testimonials } from "@/utils/testimonials";
import Image from "next/image";

export function Testimonial() {
  return (
    <section
      className="w-full overflow-hidden py-8 md:py-16 xl:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <h2
          id="testimonials-heading"
          className="mb-4 text-center text-xl font-bold text-slate-200 md:mb-6 md:text-2xl lg:mb-12 lg:text-3xl"
        >
          Don't just take our word for it
        </h2>
        <ul className="-m-3 flex flex-wrap" role="list">
          {testimonials.map(
            ({ name, role, company, avatar, content }, testimonialIndex) => (
              <li
                key={`testimonial-${testimonialIndex}`}
                className="w-full p-3 md:w-1/2 lg:w-1/3"
              >
                <article className="h-full rounded-xl border border-gray-700 bg-gray-800 bg-opacity-60 p-6">
                  <div className="flex h-full flex-col">
                    <header className="mb-4 flex flex-wrap items-center">
                      <div className="mr-2 h-12 w-12 overflow-hidden rounded-full border border-gray-200">
                        <Image
                          src={avatar}
                          alt={name}
                          className="rounded-full object-cover"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="w-auto p-2">
                        <h3 className="text-base font-semibold text-slate-200 md:text-lg xl:text-xl">
                          {name}
                        </h3>
                        <p className="text-xs text-slate-400 md:text-sm lg:text-base">
                          {role}, {company}
                        </p>
                      </div>
                    </header>
                    <blockquote className="text-xs text-slate-300 md:text-sm lg:text-base">
                      <p>{content}</p>
                    </blockquote>
                  </div>
                </article>
              </li>
            )
          )}
        </ul>

        <div className="mt-8 md:mt-12 lg:mt-14">
          <h3 className="mb-4 text-center text-xs font-medium uppercase tracking-wide text-slate-400 md:mb-6 md:text-sm lg:mb-8 lg:text-base">
            Powering Next-Gen Companies
          </h3>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {testimonialLogos.map(({ name, logo }, testimonialLogoIndex) => (
              <div
                key={`testimonial-logo-${testimonialLogoIndex}`}
                className="flex h-20 w-40 items-center justify-center rounded-lg bg-gray-200 p-4"
              >
                <Image
                  src={logo}
                  alt={name}
                  className="object-cover"
                  height={64}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
