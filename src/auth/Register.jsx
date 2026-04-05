import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!form.firstName) {
      newErrors.firstName = "First name is required";
    }

    if (!form.lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    return newErrors;
  };

  // ✅ SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      
      // ✅ LOCAL STORAGE REGISTRATION
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      const userExists = existingUsers.find(u => u.email === form.email);
      
      if (userExists) {
        setErrors({ email: "Email is already registered" });
        return;
      }

      existingUsers.push(form);
      localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

      alert("Registration successful! Please login.");
      navigate("/login");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#e7e7e7]">

      {/* CARD */}
      <div className="bg-[#f3f3f3] w-155 p-10 rounded-md">

        {/* TITLE */}
        <h2 className="text-3xl font-semibold text-center mb-8">
          Create account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* FIRST NAME */}
          <div>
            <label className="block text-sm mb-2">First name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstName}
              </p>
            )}
          </div>

          {/* LAST NAME */}
          <div>
            <label className="block text-sm mb-2">Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastName}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm mb-2">Email address</label>
            <input
              type="text"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* BUTTON */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-green-800 text-white px-10 py-2 rounded-full hover:bg-green-900 transition"
            >
              CREATE ACCOUNT
            </button>
          </div>

          {/* LOGIN LINK */}
          <div className="text-center mt-4">
            <p className="text-md font-medium">
              Already an account holder?
            </p>
            <Link
              to="/login"
              className="text-(--primary-color) text-sm underline"
            >
              Log in
            </Link>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Register;