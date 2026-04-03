import React from 'react'
import Accordion from './Accordian';


const faqDataOne = [
  {
    title: "What do you mean by item ?",
    content:
      "As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers",
  },
  {
    title: "What are some examples ?",
    content:
      "Examples include modern UI components, animations, and responsive layouts.",
  },
  {
    title: "I'm not sure if my use is covered ?",
    content:
      "You can contact support or check documentation.",
  },
];

const TwoColumnFAQSection = () => {
  return (
    <section className='py-20 bg-gray-200 rounded-2xl'>
      <div className="container">
        <div className='grid grid-cols-2 gap-6'>
            <div className='px-10 py-15 bg-white'>
              <h4 className='mb-5 font-bold text-[24px]'>Shopping information</h4>
               <Accordion data={faqDataOne} defaultOpen={0} faqItemStyle="bg-[#f5f5f5] border-gray-200"/>
            </div>
            <div className='px-10 py-15 bg-white'>
              <h4 className='mb-5 font-bold text-[24px]'>Order and delivery</h4>
               <Accordion data={faqDataOne} defaultOpen={0} faqItemStyle="bg-[#f5f5f5] border-gray-200"/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TwoColumnFAQSection