/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": `linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.36%,
          #fc2872 119.91%
        )`,
        "air-gradient": `linear-gradient(
          86.88deg,
          #C6EA8D ,
          #FE90AF
        )`,
        "earth-gradient": `linear-gradient(
          86.88deg,
          #868F96,
          #596164
        )`,
        "fire-gradient": `linear-gradient(
          86.88deg,
          #D4145A ,
          #FBB03B
        )`,
        "water-gradient": `linear-gradient(
          86.88deg,
          #2E3192,
          #1BFFFF
        )`,
      },
    },
  },
  plugins: [],
};
