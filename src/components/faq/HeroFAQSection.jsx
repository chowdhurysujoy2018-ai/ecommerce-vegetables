import React from 'react'
import heroBanner from '../../assets/images/faqs_banner.jpg'
import GlobalHeader from '../../global-components/GlobalHeader'
import Accordion from './Accordian';


const faqData = [
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

const HeroFAQSection = () => {
  return (
    <section className='py-20'>
      <div className="container">
        <div className='grid grid-cols-2 gap-6 bg-gray-100 items-center'>
            <div>
              <img src={heroBanner} alt="" className='w-full'/>
            </div>
            <div className='px-10 py-15'>
              <GlobalHeader headerText="Yes, everything a the side from pre-orders" />
               <Accordion data={faqData} defaultOpen={0} faqItemStyle="bg-white border-gray-200"/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroFAQSection