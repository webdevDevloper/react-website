module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0 40px 0 rgb(22 22 25 / 10%)",
      },
      colors: {
        primary: "#f75454",
      },
      flex: {
        ant: "0 0 25%",
        ant50: "0 0 50%",
        ant75: "0 0 75%",
        ant100: "0 0 100%",
        flexIphone: "0 0 100%",
      },
    },
    screens: {
      iphone: "260px",
      //   tablet: "768px",
      //   ipad: "992px",
      //   sm: "640px",
      //   // => @media (min-width: 640px) { ... }
      md: "540px",
      //   // => @media (min-width: 768px) { ... }
      lg: "1280px",
      //   // => @media (min-width: 1024px) { ... }
      //   xl: "1280px",
      //   // => @media (min-width: 1280px) { ... }
      //   "2xl": "1536px",
      //   // => @media (min-width: 1536px) { ... }
      //   // => @media (min-width: 640px) { ... }
      //   // laptop: "1024px",
      //   // // => @media (min-width: 1024px) { ... }
      desktop: "1280px",
      //   // // => @media (min-width: 1280px) { ... }
      // },
      // maxWidth: {
      //   "1/2": "50%",
      //   "13/20": "65%",
      //   "7/20": "35%",
      //   "3/4": "25%",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
