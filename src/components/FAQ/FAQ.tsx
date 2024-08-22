import Link from "next/link";
import Accordion from "../Accordion/Accordion";
import { faqsItems } from "@/utils/faqItems";

export default function FAQ() {
  return (
    <section className="w-full overflow-hidden py-8 md:py-16 xl:py-24">
      <div className="container mx-auto px-4">
        <h1 className="mb-16 text-center text-2xl font-bold text-slate-200 md:text-3xl xl:text-4xl" data-aos="fade-up" data-aos-duration="800">
          Frequently Asked Questions
        </h1>

        <div className="mb-6 flex flex-wrap">
          {faqsItems.map(({ title, text, active }, faqIndex) => (
            <Accordion
              key={`faq-${faqIndex}`}
              title={title}
              text={text}
              id={`faqs-${faqIndex}`}
              active={active}
            />
          ))}
        </div>

        <p className="text-center text-sm font-medium text-slate-200 md:text-base lg:text-lg" data-aos="fade-up" data-aos-duration="800">
          <span>Still have any questions?</span>
          <Link
            href="/support"
            className="ms-2 font-semibold text-blue-600 hover:text-blue-700"
          >
            Contact Us
          </Link>
        </p>
      </div>
    </section>
  );
}
