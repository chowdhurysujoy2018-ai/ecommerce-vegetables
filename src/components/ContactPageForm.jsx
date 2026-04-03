import React from 'react'

import { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

const initialErrors = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

function validate(fields) {
  const errors = { ...initialErrors };
  let isValid = true;

  if (!fields.firstName.trim()) {
    errors.firstName = "First name is required.";
    isValid = false;
  } else if (fields.firstName.trim().length < 2) {
    errors.firstName = "Must be at least 2 characters.";
    isValid = false;
  }

  if (!fields.lastName.trim()) {
    errors.lastName = "Last name is required.";
    isValid = false;
  } else if (fields.lastName.trim().length < 2) {
    errors.lastName = "Must be at least 2 characters.";
    isValid = false;
  }

  if (!fields.phone.trim()) {
    errors.phone = "Phone number is required.";
    isValid = false;
  } else if (!/^\+?[0-9\s\-().]{7,15}$/.test(fields.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
    isValid = false;
  }

  if (!fields.email.trim()) {
    errors.email = "Email address is required.";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Enter a valid email address.";
    isValid = false;
  }

  if (!fields.message.trim()) {
    errors.message = "Message is required.";
    isValid = false;
  } else if (fields.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
    isValid = false;
  }

  return { errors, isValid };
}

const ContactPageForm = () => {

    const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: value };
    setFields(updated);

    if (touched[name]) {
      const { errors: newErrors } = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const { errors: newErrors } = validate(fields);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = Object.keys(initialState).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);
    const { errors: newErrors, isValid } = validate(fields);
    setErrors(newErrors);
    if (isValid) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFields(initialState);
    setErrors(initialErrors);
    setTouched({});
    setSubmitted(false);
  };

  const inputBase =
    "w-full rounded-md bg-gray-100 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-200 border border-transparent focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-200";

  const inputError =
    "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-100";

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md w-full text-center animate-fade-in">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h2>
          <p className="text-gray-500 mb-8">
            Thanks, <span className="font-semibold text-gray-700">{fields.firstName}</span>! We'll get back to you at{" "}
            <span className="font-semibold text-gray-700">{fields.email}</span> shortly.
          </p>
          <button
            onClick={handleReset}
            className="rounded-full bg-green-800 px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:bg-green-700 hover:shadow-md active:scale-95"
          >
            Send Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
        <div className="container">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Fill out the form and we'll get back soon!</h2>
            <div className="p-6">
                <div onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={fields.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="First name"
                            className={`${inputBase} ${errors.firstName ? inputError : ""}`}
                        />
                        {errors.firstName && (
                            <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.firstName}
                            </p>
                        )}
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={fields.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Last name"
                            className={`${inputBase} ${errors.lastName ? inputError : ""}`}
                        />
                        {errors.lastName && (
                            <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.lastName}
                            </p>
                        )}
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={fields.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Phone number"
                            className={`${inputBase} ${errors.phone ? inputError : ""}`}
                        />
                        {errors.phone && (
                            <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.phone}
                            </p>
                        )}
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                        <input
                            type="email"
                            name="email"
                            value={fields.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Email address"
                            className={`${inputBase} ${errors.email ? inputError : ""}`}
                        />
                        {errors.email && (
                            <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.email}
                            </p>
                        )}
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Enter your message</label>
                        <textarea
                        name="message"
                        value={fields.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your message"
                        rows={5}
                        className={`${inputBase} resize-none ${errors.message ? inputError : ""}`}
                        />
                        <div className="flex items-center justify-between mt-1">
                        {errors.message ? (
                            <p className="flex items-center gap-1 text-xs text-red-500">
                            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.message}
                            </p>
                        ) : (
                            <span />
                        )}
                        <span className={`text-xs ${fields.message.length < 10 ? "text-gray-400" : "text-green-600"}`}>
                            {fields.message.length} / 10 min
                        </span>
                        </div>
                    </div>
                    <div>
                        <button
                        onClick={handleSubmit}
                        className="rounded-full bg-green-800 px-10 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:bg-green-700 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                        >
                        Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactPageForm

