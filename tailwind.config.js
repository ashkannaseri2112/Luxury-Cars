/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      container: true,
      padding: {
        DEFAULT: "1.5rem",
        sm:"1rem",
        lg:"1.25rem"
      }
    },
    screens:{
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1320px",
      },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
}

