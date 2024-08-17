import { Element } from "react-scroll";
import { YoutubeEmbed } from "../Youtube/Youtube";

export default function Tour() {
  return (
    <section>
      <Element
        name="how-it-works"
        id="how-it-works"
        className="w-full pt-24 pb-28 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4">
              Streamline Developer Onboarding: Cut Time by 200% with Automated
              Documentation
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-500">
              Watch How Penify Automates Documentation in Minutes - Take a Quick
              Tour
            </p>
          </div>

          <figure className="mt-8 mx-auto max-w-4xl">
            <div className="flex h-11 w-full items-center justify-between rounded-t-lg bg-gray-200 px-3">
              <div className="flex items-center justify-start space-x-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                <span className="h-3 w-3 rounded-full bg-green-400"></span>
              </div>

              <div className="w-2/4 mx-auto hidden md:block">
                <h3 className="rounded-lg bg-gray-300 px-4 py-1 text-center text-xs font-normal">
                  How Penify Automates Documentation?
                </h3>
              </div>
            </div>

            <div className="h-fit w-full border-t-0 bg-gray-100">
              <YoutubeEmbed
                videoId="s32GS0glydA"
                title="How Penify Automates Documentation?"
                poster="maxresdefault"
              />
            </div>
          </figure>
        </div>
      </Element>
    </section>
  );
}
