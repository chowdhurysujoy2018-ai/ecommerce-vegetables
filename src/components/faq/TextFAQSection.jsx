import React from 'react'
import Accordion from './Accordian';
import GlobalHeader from '../../global-components/GlobalHeader';
import { Link } from 'react-router-dom';
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

const TextFAQSection = () => {
  return (
    <section className='py-20 bg-white rounded-2xl'>
      <div className="container">
        <div className='grid grid-cols-2 gap-6 items-center'>
            <div>
              <GlobalHeader headerText="Frequently asked questions" />
              <p>Lorem ipsum is simply dummy text of the printing and type setting industry. Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown !</p>
              <Link className="underline mt-6 block text-[18px]" to="/contact">
                More information
              </Link>
            </div>
            <div className='px-10 py-15 bg-gray-100'>
              <h4 className='mb-5 font-bold text-[24px]'>Order and delivery</h4>
               <Accordion data={faqDataOne} defaultOpen={0} faqItemStyle="bg-white border-gray-200"/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TextFAQSection