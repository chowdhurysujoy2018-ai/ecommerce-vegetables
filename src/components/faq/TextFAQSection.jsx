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

export default function TextFAQSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left: Title + Description + CTA */}
        <div className="pt-4">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Lorem Ipsum is simply dummy text of the printing and type setting industry.
            Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown!
          </p>
          <a
            href="#"
            className="text-sm font-semibold text-gray-800 underline underline-offset-4 tracking-widest uppercase hover:text-green-700 transition-colors"
          >
            More Information
          </a>
        </div>

        {/* Right: Accordion Panel */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
          <AccordionItem question="What do you mean by item ?" answer={defaultAnswer} defaultOpen={true} />
          <AccordionItem question="What are some examples ?" answer={defaultAnswer} />
          <AccordionItem question="I'm not sure if my use is covered ?" answer={defaultAnswer} />
          <AccordionItem question="Is threading a better ?" answer={defaultAnswer} />
        </div>

      </div>
    </section>
  );
}
