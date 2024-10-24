/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        blue:{
          850:"#21408E"
        },
        yellow:{
           850:"#F1BC00"
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          lg: "3rem",
        },
      },
      fontSize: {
        h2: "45px",
        h3: "39px",
        h4: "28px",
        a: "22px",
        p: "20px",
      },
      fontFamily: {
        Helvetica: "Helvetica",
        HelveticaBold: "Helvetica-Bold",
        HelveticaLight: "Helvetica-Light",
        Roboto: "Roboto",
        RobotoRegular: "Roboto-Regular",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1320px",
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        h2: { fontSize: theme("fontSize.h2") },
        h3: { fontSize: theme("fontSize.h3") },
        h4: { fontSize: theme("fontSize.p") },
        p: { fontSize: theme("fontSize.p") },
        a: { fontSize: theme("fontSize.a") },
      });
    },
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
