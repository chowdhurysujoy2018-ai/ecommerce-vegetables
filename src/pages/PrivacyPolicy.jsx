import React from 'react'
import ContentBlock from '../components/ContentBlock'

const PrivacyPolicy = () => {
  return (
    <section className="py-16">
  <div className="container flex flex-col gap-y-6">

    <ContentBlock
      title="1. Information We Collect"
      description="We collect personal information such as your name, phone number, email address, and delivery address when you place an order. We may also collect payment details and browsing behavior to improve our services."
    />

    <ContentBlock
      title="2. How We Use Your Information"
      description="Your information is used to process orders, manage deliveries, provide customer support, and improve our website experience. We may also send updates, offers, and service notifications."
    />

    <ContentBlock
      title="3. Data Protection & Security"
      description="We take appropriate security measures to protect your personal data from unauthorized access, misuse, or disclosure. All transactions are processed through secure and trusted payment gateways."
    />

    <ContentBlock
      title="4. Sharing of Information"
      description="We do not sell or rent your personal information. Your data may be shared with delivery partners and payment providers only for order fulfillment and transaction processing."
    />

    <ContentBlock
      title="5. Cookies & Tracking"
      description="Our website uses cookies to enhance user experience, track website performance, and analyze traffic. You can choose to disable cookies through your browser settings."
    />

    <ContentBlock
      title="6. Your Rights"
      description="You have the right to access, update, or delete your personal information. You can also opt out of promotional communications at any time."
    />

    <ContentBlock
      title="7. Changes to Privacy Policy"
      description="We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date."
    />

    <ContentBlock
      title="8. Contact Us"
    >
      <p className="text-gray-600">
        If you have any questions about our privacy policy, please contact us:
      </p>

      <ul className="mt-2 text-gray-600 space-y-1">
        <li>Email: support@yourstore.com</li>
        <li>Phone: +91 9876543210</li>
        <li>Address: Your Store Location, India</li>
      </ul>
    </ContentBlock>

  </div>
</section>
  )
}

export default PrivacyPolicy