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

      backgroundImage: {
        todo: "linear-gradient(to bottom right, rgba(252, 165, 165, 0.8), rgba(185, 28, 28, 0.7)), url('/src/assets/images/todo_demo.png')",
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
