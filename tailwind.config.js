module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          dark: {
            700: '#2D2D3A',
            800: '#1E1E2D',
            900: '#121218',
          },
          indigo: {
            500: '#6366F1',
            600: '#4F46E5',
            700: '#4338CA',
          }
        },
      },
    },
    plugins: [],
  }