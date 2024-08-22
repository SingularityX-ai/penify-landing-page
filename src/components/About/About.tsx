import Image from "next/image";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";
import { teamItems } from "@/utils/teamItems";
import Link from "next/link";
import { IconBrandLinkedin } from "@tabler/icons-react";

export default function About() {
  return (
    <section className="w-full overflow-hidden">
      <Breadcrumb title="About Us" />

      <div className="w-full overflow-hidden py-8 md:py-16 xl:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-6 max-w-4xl md:mb-12">
            <h2
              className="mb-4 text-xl font-bold text-slate-200 md:mb-6 md:text-2xl lg:text-3xl"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Our Mission
            </h2>
            <p
              className="text-sm text-slate-400 md:mb-8 md:text-base lg:text-lg"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              At Penify.dev, we are creating a GitHub App to automate and
              streamline the documentation process for developers and teams.
              Powered by Large Language Models, it ensures that project
              docstrings is always up-to-date, consistent, and accurately
              reflects the latest code changes. <br /> <br /> Our mission is to
              save developers time, reduce onboarding complexity, and maintain
              clarity across projects, making software development smoother and
              more efficient for everyone involved.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2
              className="mb-4 text-xl font-bold text-slate-200 md:mb-6 md:text-2xl lg:text-3xl"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Meet Our Team
            </h2>

            <ul className="xs:grid-cols-2 grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-3">
              {teamItems.map(
                ({ img, username, role, linkedIn }, teamItemIndex) => (
                  <div
                    className="bg-bannerBg group relative rounded-lg"
                    key={`team-member-${teamItemIndex}`}
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="50"
                  >
                    <Image
                      src={img}
                      alt={`${username} picture`}
                      className="rounded-md"
                    />

                    <div className="absolute bottom-0 left-0 right-0 w-full p-3">
                      <div className="rounded-md bg-white px-5 py-4">
                        <div className="mb-0 group-hover:mb-4">
                          <h3 className="text-base font-semibold text-slate-800 md:text-lg xl:text-xl">
                            {username}
                          </h3>
                          <p className="text-xs text-slate-600 md:text-sm lg:text-base">
                            {role}
                          </p>
                        </div>

                        <div className="invisible h-0 translate-y-full opacity-0 transition-all duration-150 ease-in-out group-hover:visible group-hover:h-6 group-hover:translate-y-0 group-hover:opacity-100">
                          <span className="sr-only">LinkedIn</span>

                          <Link
                            href={`https://www.linkedin.com/in/${linkedIn}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <IconBrandLinkedin />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
