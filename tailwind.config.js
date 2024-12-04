/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "nav-mobile": "url('/src/assets/images/bg-sidebar-mobile.svg')",
        "nav-desktop": "url('/src/assets/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
