module.exports = {
  content: ["./index.html", "./src/*/*.{vue,js,html,jsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('../assets/images/bg-movies-image.jpg')",
        "signup-bg": "url('../assets/images/bg-movies-image-1.jpg')",
      },
      
    },
  },
  plugins: [],
};
