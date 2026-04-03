import React from 'react'
import ContentBlock from "../components/ContentBlock";
const TermConditions = () => {
  return (
    <section className="py-16">
  <div className="container flex flex-col gap-y-6">

    <ContentBlock
      title="1. Product Information"
      description="We strive to provide accurate details about all vegetables and products listed on our website. However, slight variations in size, weight, color, and freshness may occur due to the natural nature of farm produce."
    />

    <ContentBlock
      title="2. Pricing & Availability"
      description="All prices are listed in INR and are subject to change without prior notice. Product availability may vary based on seasonal supply and stock. We reserve the right to limit quantities or cancel orders if items are unavailable."
    />

    <ContentBlock
      title="3. Order & Delivery"
      description="Orders are processed within the specified time slots. Delivery times may vary depending on your location and weather conditions. Please ensure accurate address details to avoid delays or failed deliveries."
    />

    <ContentBlock
      title="4. Quality & Freshness"
      description="We ensure that all vegetables are fresh and sourced from trusted farmers. If you receive damaged or spoiled items, please report within 24 hours of delivery with proper proof (images/videos)."
    />

    <ContentBlock
      title="5. Return & Refund Policy"
      description="Due to the perishable nature of vegetables, returns are generally not accepted. Refunds or replacements will only be provided for damaged, incorrect, or missing items after verification."
    />

    <ContentBlock
      title="6. Cancellation Policy"
      description="Orders can be canceled before dispatch. Once the order is out for delivery, cancellation requests will not be accepted."
    />

    <ContentBlock
      title="7. User Responsibilities"
      description="Customers are responsible for providing accurate information during checkout. Misuse of the website, fraudulent activities, or false claims may result in account suspension."
    />

    <ContentBlock
      title="8. Contact Us"
    >
      <p className="text-gray-600">
        For any queries or support, feel free to reach out:
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

export default TermConditions