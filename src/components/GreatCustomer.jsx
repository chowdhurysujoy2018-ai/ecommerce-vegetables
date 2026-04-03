import React from "react";
import { Link } from "react-router-dom";
import Button from "../global-components/Button";
import contactImg from "../assets/images/contact_us_banner.webp";

const GreatCustomer = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
            We would love to talk with <br />
            our great customer
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Give us a call or drop by anytime, we endeavour to answer all 
            enquiries within 24 hours on business days I’ve created a vocabulary 
            of different styles i draw from many different ways to take a picture.
          </p>
          <Button btnText="SHOP NOW" btnClr="bg-(--primary-color) text-white transition !mt-0"/>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={contactImg}
            alt="Customer holding fruits"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default GreatCustomer;