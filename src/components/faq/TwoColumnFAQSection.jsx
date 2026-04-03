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

const FAQColumn = ({ title, items }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
    <h3 className="text-lg font-bold text-gray-800 mb-5">{title}</h3>
    {items.map((item, i) => (
      <AccordionItem
        key={i}
        question={item.question}
        answer={item.answer ?? defaultAnswer}
        defaultOpen={item.defaultOpen ?? false}
      />
    ))}
  </div>
);

export default function TwoColumnFAQSection() {
  const shoppingItems = [
    { question: "How do i activate my account?", defaultOpen: true },
    { question: "Why do we use it?" },
    { question: "Where does it come from?" },
    { question: "Where can i get some?" },
  ];

  const paymentItems = [
    { question: "Why does a beauty blender ?", defaultOpen: true },
    { question: "What is better ?" },
    { question: "Is it necessary to use ?" },
    { question: "Should i moisturise ?" },
  ];

  return (
    <section className="bg-gray-50 py-14 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <FAQColumn title="Shopping information" items={shoppingItems} />
        <FAQColumn title="Payment information" items={paymentItems} />
      </div>
    </section>
  );
}
