import React from 'react'
import InsideHeroBanner from '../components/InsideHeroBanner'
import HeroFAQSection from '../components/faq/HeroFAQSection'
import TwoColumnFAQSection from '../components/faq/TwoColumnFAQSection'
import TextFAQSection from '../components/faq/TextFAQSection'


const Faqs = () => {
  return (
    <>
     <InsideHeroBanner />
      <HeroFAQSection />
      <TwoColumnFAQSection />
      <TextFAQSection />
    </>
  )
}

export default Faqs