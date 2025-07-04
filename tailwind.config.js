module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // if using /app
    "./pages/**/*.{js,ts,jsx,tsx}", // if using /pages
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
};
