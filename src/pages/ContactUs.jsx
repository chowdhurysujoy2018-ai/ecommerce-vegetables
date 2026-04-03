import React from 'react'
import InsideHeroBanner from '../components/InsideHeroBanner'
import ContactPageInfoGrid from '../components/ContactPageInfoGrid'
import ContactPageForm from '../components/ContactPageForm'
import GreatCustomer from '../components/GreatCustomer'

const ContactUs = () => {
  return (
    <>
      <InsideHeroBanner />
      <ContactPageInfoGrid />
      <GreatCustomer />
      <ContactPageForm />
    </>
  )
}

export default ContactUs