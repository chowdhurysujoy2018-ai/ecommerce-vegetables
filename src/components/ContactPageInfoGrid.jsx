import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactPageInfoGrid = () => {
  return (
    <section className="py-20">
      <div className="container px-4 grid md:grid-cols-3 gap-10">

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="w-26 h-26 flex items-center justify-center rounded-full border-15 border-gray-100">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-(--primary-color) text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Phone number</h3>

            <Link to="tel:+0102236020020" className="block text-gray-600 hover:text-(--primary-color)">
              (+01) 0223 6020 020
            </Link>

            <Link to="tel:+01200606006000" className="block text-gray-600 hover:text-(--primary-color)">
              (+01) 2006 0600 6000
            </Link>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="w-26 h-26 flex items-center justify-center rounded-full border-15 border-gray-100">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-(--primary-color) text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Store address</h3>

            <Link
              to="https://www.google.com/maps?q=Akshya+nagar+1st+block+1st+cross+Bangalore+560016"
              target="_blank"
              className="text-gray-600 hover:text-(--primary-color) block"
            >
              Akshya nagar 1st block 1st cross,
              <br />
              Bangalore-560016
            </Link>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-26 h-26 flex items-center justify-center rounded-full border-15 border-gray-100">
            <FontAwesomeIcon icon={faEnvelope} className="text-(--primary-color) text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Customer email</h3>

            <Link
              to="mailto:demoinfo@gmail.com"
              className="block text-gray-600 hover:text-(--primary-color)"
            >
              demoinfo@gmail.com
            </Link>

            <Link
              to="mailto:info8989@gmail.com"
              className="block text-gray-600 hover:text-(--primary-color)"
            >
              info8989@gmail.com
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactPageInfoGrid;