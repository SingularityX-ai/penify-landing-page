import Link from "next/link";
import Flow from "../Flow/Flow";

export default function Hero() {
  return (
    <section className="w-full pt-24 pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 p-8">
            <div className="inline-block mb-6 px-2 py-1 font-semibold bg-green-100 rounded-full">
              <h3 className="text-sm text-gray-800">
                Revolutionize Developer Workflow
              </h3>
            </div>

            <h1 className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl">
              Automated Documentation for Every Step of the Process
            </h1>

            <p className="mb-10 text-sm md:text-base lg:text-lg text-gray-600">
              From Pull Requests to API Docs, Penify Instantly Generates and
              Updates Comprehensive Documentation — Streamlining Your Codebase
              and Saving You Time.
            </p>

            <div className="flex flex-wrap gap-x-2.5 -my-2.5">
              <Link
                href="https://github.com/apps/penify-dev/installations/select_target"
                className="rounded-lg bg-blue-700 px-6 py-3 text-center text-sm font-medium text-white transition-all duration-200 ease-in hover:bg-blue-800 focus:outline-none focus:ring-blue-300"
              >
                Get Started
              </Link>

              <Link
                href="https://calendly.com/sumansaurabh-snorkell/intro-snorkell-i"
                className="rounded-lg bg-slate-700 px-6 py-3 text-center text-sm font-medium text-white transition-all duration-200 ease-in hover:bg-slate-800 focus:outline-none focus:ring-slate-300"
              >
                Request a Demo
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <Flow />
          </div>
        </div>
      </div>
    </section>
  );
}
