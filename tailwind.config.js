module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#267972",
        secondary: "#F0C425",
        tertiary: "#E7A71C",
        quaternary: "#135B73",
      },
      width: {
        95: "95%",
        90: "90%",
        85: "85%",
        80: "80%",
        75: "75%",
        70: "70%",
        65: "65%",
        60: "60%",
      },
      gridTemplateColumns: {
        bannerGrid: "repeat(1 , 60% 1fr)",
      },
      backgroundImage: {
        lines: "url('assets/images/lines.jpg')",
      },
    },
  },
  plugins: [],
};
