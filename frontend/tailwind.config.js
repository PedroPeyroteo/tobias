// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light Theme: Soft Pastels
        "primary-light": "#6D28D9",
        "secondary-light": "#F3F4F6",
        "accent-light": "#4F46E5",
        "background-light": "#FFFFFF",
        "text-light": "#1F2937",
        "error-light": "#EF4444",

        // Dark Theme: Midnight Blues
        "primary-dark": "#1E3A8A",
        "secondary-dark": "#0F172A",
        "accent-dark": "#3B82F6",
        "background-dark": "#1F2937",
        "text-dark": "#E5E7EB",
        "error-dark": "#F87171",

        // Light Theme: Neutral Modern
        "primary-neutral": "#007BFF",
        "secondary-neutral": "#E9ECEF",
        "accent-neutral": "#28A745",
        "background-neutral": "#F8F9FA",
        "text-neutral": "#343A40",
        "error-neutral": "#DC3545",

        // Dark Theme: Tech Noir
        "primary-tech": "#FF4081",
        "secondary-tech": "#121212",
        "accent-tech": "#00E5FF",
        "background-tech": "#212121",
        "text-tech": "#E0E0E0",
        "error-tech": "#FF5252",

        // Light Theme: Fresh Greens
        "primary-fresh": "#4CAF50",
        "secondary-fresh": "#E8F5E9",
        "accent-fresh": "#FF5722",
        "background-fresh": "#FFFFFF",
        "text-fresh": "#212121",
        "error-fresh": "#F44336",

        // Dark Theme: Retro Futurism
        "primary-retro": "#FF6F00",
        "secondary-retro": "#263238",
        "accent-retro": "#C51162",
        "background-retro": "#212121",
        "text-retro": "#B0BEC5",
        "error-retro": "#D32F2F",
      },
    },
  },
  plugins: [],
};
