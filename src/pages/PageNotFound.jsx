
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="h-[50vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        
        {/* Big 404 */}
        <h1 className="text-7xl font-bold text-gray-800">404</h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-(--primary-color) text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;