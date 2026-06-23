import { useState } from "react";
import FadeIn from "./FadeIn";
import { faqs } from "../data/content";

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-[#e8d5b7]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between py-5 font-inter text-[14px] font-medium text-[#2b2118] hover:text-[#d9542d] transition-colors duration-150 text-left"
      >
        {faq.question}
        <span
          className="text-[22px] font-light ml-4 flex-shrink-0 text-[#d9542d] transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? "200px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p className="font-inter text-[13px] text-[#6b5a45] leading-relaxed pb-5">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" className="bg-[#fffaf2] px-8 md:px-16 lg:px-24 py-24">
      <FadeIn>
        <p className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#d9542d] mb-3">
          Common questions
        </p>
        <h2 className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-[#2b2118] mb-12">
          FAQ
        </h2>
      </FadeIn>
      <div className="max-w-2xl border-t-2 border-[#e8d5b7]">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
}

export default FAQ;
