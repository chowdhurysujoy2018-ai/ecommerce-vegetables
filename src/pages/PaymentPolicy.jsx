import React from 'react'
import ContentBlock from '../components/ContentBlock'

const PaymentPolicy = () => {
  return (
    <section className="py-16">
  <div className="container flex flex-col gap-y-6">

    <ContentBlock
      title="1. Accepted Payment Methods"
      description="We accept multiple payment options including UPI, debit cards, credit cards, net banking, and cash on delivery (COD). All online payments are processed through secure and trusted payment gateways."
    />

    <ContentBlock
      title="2. Payment Security"
      description="Your payment information is encrypted and securely processed. We do not store your card details on our servers. All transactions comply with standard security protocols to ensure safe payments."
    />

    <ContentBlock
      title="3. Cash on Delivery (COD)"
      description="Cash on Delivery is available for selected locations. Please ensure you provide the exact amount at the time of delivery. Our delivery partners may not carry change."
    />

    <ContentBlock
      title="4. Payment Confirmation"
      description="Once your payment is successfully completed, you will receive an order confirmation via SMS or email. If you do not receive confirmation, please contact our support team."
    />

    <ContentBlock
      title="5. Failed Transactions"
      description="In case of failed or incomplete transactions, the amount will be automatically refunded to your original payment method within 5-7 business days. If the issue persists, please contact your bank or our support team."
    />

    <ContentBlock
      title="6. Pricing & Taxes"
      description="All product prices are listed in INR and include applicable taxes unless stated otherwise. Delivery charges may apply based on your location and order value."
    />

    <ContentBlock
      title="7. Refunds & Adjustments"
      description="Refunds for eligible cases such as damaged or missing items will be processed to the original payment method or as store credit, depending on the situation."
    />

    <ContentBlock
      title="8. Contact Us"
    >
      <p className="text-gray-600">
        For any payment-related queries, please contact us:
      </p>

      <ul className="mt-2 text-gray-600 space-y-1">
        <li>Email: support@yourstore.com</li>
        <li>Phone: +91 9876543210</li>
        <li>Working Hours: 9:00 AM – 8:00 PM</li>
      </ul>
    </ContentBlock>

  </div>
</section>
  )
}

export default PaymentPolicy