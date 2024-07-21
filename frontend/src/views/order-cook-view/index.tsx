// src/App.jsx
import React, { useState } from "react";

function OrderCookView() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isDarkTheme
          ? "bg-background-dark text-text-dark"
          : "bg-background-light text-text-light"
      }`}
    >
      <div className="border-2 rounded-2xl border-blue-500 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-4 relative">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-white">
          a
        </div>
      </div>
      <button
        onClick={toggleTheme}
        className={`mt-4 py-2 px-4 ${
          isDarkTheme ? "bg-accent-dark" : "bg-accent-light"
        } text-white rounded`}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default OrderCookView;
