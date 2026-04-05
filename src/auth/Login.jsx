import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from || "/";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      const validUser = existingUsers.find(u => u.email === form.email && u.password === form.password);

      if (validUser || (form.email === "test@gmail.com" && form.password === "123456")) {
        const userData = validUser
          ? { email: validUser.email, firstName: validUser.firstName }
          : { email: form.email, firstName: "Test User" };

        login(userData);
        navigate(from, { replace: true }); // ✅ ONLY CHANGE HERE
      } else {
        setErrors({
          general: "Invalid email or password. Please register first if you haven't.",
        });
      }
    }
  };

  return (
    <section className="py-20 flex items-center justify-center bg-[#e7e7e7]">
      <div className="bg-[#f3f3f3] w-155 p-10 rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-8">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {errors.general && (
            <p className="text-red-500 text-sm text-center">
              {errors.general}
            </p>
          )}

          <div>
            <label className="block text-sm mb-2">Email address</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>

          <div className="flex justify-center pt-2">
            <button className="bg-green-800 text-white px-8 py-2 rounded-full">
              SIGN IN
            </button>
          </div>

          <p className="text-center text-sm text-gray-500">
            <Link to="/forgot-password" className="underline">
              Forgot password?
            </Link>
          </p>

          <div className="text-center mt-4">
            <p>Don't have an account?</p>
            <Link to="/register" className="underline">
              Create account
            </Link>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Login;