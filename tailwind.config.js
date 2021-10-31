module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
          md: "5rem",
          lg: "6rem",
          xl: "8rem",
          "2xl": "10rem",
        },
      },

      blur: {
        xs: "2px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      backgroundImage: ["hover"],
      blur: ["hover"],
    },
  },
  plugins: [],
};
