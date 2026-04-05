import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/ContactUs'
import Faqs from '../pages/Faqs'
import ReturnPolicy from '../pages/ReturnPolicy'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import PaymentPolicy from '../pages/PaymentPolicy'
import TermConditions from '../pages/TermConditions'
import Shop from '../pages/Shop'
import ProductListing from '../pages/ProductListing'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'

// product pages
import Cart from '../pages/Cart'
import Wishlist from '../pages/Wishlist'
import Checkout from '../pages/Checkout'

// auth pages
import Login from '../auth/Login'
import Logout from '../auth/Logout'
import Register from '../auth/Register'
import ForgotPassword from '../auth/ForgotPassword'
import ResetPassword from '../auth/ResetPassword'

// 404 page
import PageNotFound from '../pages/PageNotFound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product-lists" element={<ProductListing />} />
      <Route path="/blog" element={<Blog />} />
      {/* <Route path="/blog-details" element={<BlogDetails />} /> */}
      <Route path="/blog/:id" element={<BlogDetails />} />

      {/* pages */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/return-policy" element={<ReturnPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/payment-policy" element={<PaymentPolicy />} />
      <Route path="/terms-conditions" element={<TermConditions />} />

      {/* product pages */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />


      {/* auth pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />


      {/* 404 not found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes