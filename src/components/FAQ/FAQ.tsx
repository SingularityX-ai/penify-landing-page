import Link from "next/link";
import Accordion from "../Accordion/Accordion";
import { faqsItems } from "@/utils/faqItems";

export default function FAQ() {
  return (
    <section className="w-full pt-24 pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-2xl text-center font-semibold">
          Frequently Asked Questions
        </h2>

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

        <p className="text-center font-medium">
          <span>Still have any questions?</span>
          <Link
            href="/support"
            className="font-semibold text-blue-600  hover:text-blue-700 ms-2"
          >
            Contact Us
          </Link>
        </p>
      </div>
    </section>
  );
}
