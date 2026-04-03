import { useState } from "react";

const AccordionItem = ({ question, answer, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`border border-gray-200 rounded-md mb-2 overflow-hidden bg-white ${open ? "shadow-sm" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left focus:outline-none group"
      >
        <span className={`text-sm font-semibold transition-colors duration-200 ${open ? "text-green-700" : "text-gray-800 group-hover:text-green-700"}`}>
          {question}
        </span>
        <span className={`ml-3 flex-shrink-0 text-lg font-light transition-transform duration-300 ${open ? "text-green-700 rotate-45" : "text-gray-400"}`}>
          +
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-4 pb-4 text-sm text-gray-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const defaultAnswer = "As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers";

export default function HeroFAQSection() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-md aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=700&q=80"
            alt="Fresh fruits on a plate"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Heading + Accordion */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-snug">
            Yes, everything a the side from pre-orders
          </h2>
          <AccordionItem question="What do you mean by item ?" answer={defaultAnswer} defaultOpen={true} />
          <AccordionItem question="What are some examples ?" answer={defaultAnswer} />
          <AccordionItem question="I'm not sure if my use is covered ?" answer={defaultAnswer} />
        </div>

      </div>
    </section>
  );
}
