import React, { useEffect, useState } from "react";
import Button from "../global-components/Button";

const OfferTimer = () => {
  // 👉 Set your target date here
  const targetDate = new Date("2026-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  // ✅ Live countdown (no refresh)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="h-[70vh] flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1610348725531-843dff563e2c')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg max-w-md w-full">
        
        <p className="text-gray-950 mb-4 font-medium">
          Unleash the power of the dragon.
        </p>

        {/* Countdown */}
        <div className="flex justify-between items-center border border-gray-950 rounded-full px-6 py-3 mb-6">
          
          <div>
            <h2 className="text-2xl font-bold text-(--primary-color)">
              {timeLeft.days}
            </h2>
            <p className="text-xs">Day</p>
          </div>

          <span>:</span>

          <div>
            <h2 className="text-2xl font-bold text-(--primary-color)">
              {timeLeft.hours}
            </h2>
            <p className="text-xs">Hrs</p>
          </div>

          <span>:</span>

          <div>
            <h2 className="text-2xl font-bold text-(--primary-color)">
              {timeLeft.minutes}
            </h2>
            <p className="text-xs">Min</p>
          </div>

          <span>:</span>

          <div>
            <h2 className="text-2xl font-bold text-(--primary-color)">
              {timeLeft.seconds}
            </h2>
            <p className="text-xs">Sec</p>
          </div>

        </div>

        {/* Button */}
        <Button btnText="SHOP NOW" btnClr="bg-(--primary-color) text-white transition !mt-0"/>

      </div>
    </section>
  );
};

export default OfferTimer;