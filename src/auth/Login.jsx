import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

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
      console.log("Login Data:", form);
      // 👉 API CALL HERE
    }
  };

  return (
    <section className="py-20 flex items-center justify-center bg-[#e7e7e7]">

      {/* CARD */}
      <div className="bg-[#f3f3f3] w-155 p-10 rounded-md">

        {/* TITLE */}
        <h2 className="text-3xl font-semibold text-center mb-8">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* EMAIL */}
          <div>
            <label className="block text-sm mb-2">Email address</label>
            <input
              type="text"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
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
              className="w-full p-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* BUTTON */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-green-800 text-white px-8 py-2 rounded-full hover:bg-green-900 transition"
            >
              SIGN IN
            </button>
          </div>

          {/* FORGOT PASSWORD */}
          <p className="text-center text-sm text-gray-500 mt-2">
            <Link to="/forgot-password" className="underline">
              Forgot password?
            </Link>
          </p>

          {/* CREATE ACCOUNT */}
          <div className="text-center mt-4">
            <p className="text-md font-medium">
              Don't have an account?
            </p>
            <Link
              to="/register"
              className="text-(--primary-color) text-sm underline"
            >
              Create account?
            </Link>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Login;