/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces"],
        text: ["Montserrat"],
      },
      colors() {
        return {
          primary: {
            cream: "hsl(30, 38%, 92%)",
            black: "hsl(212, 21%, 14%)",
            dark: "hsl(228, 12%, 48%)",
            cyan: "hsl(158, 36%, 37%)",
            darkcyan: "hsl(158, 36%, 27%)",
          },
        };
      },
    },
  },
  plugins: [],
};
