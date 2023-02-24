const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#84A215',
        darkPrimaryBg: '#2d333b',
        darkSecondBg: '#22272e',
        darkThirdBg: '#818181',
        darkFourthBg: '#5A5A5A',
        darkBlackTrasbBg: '#00000059',
        darkTextSecond: '#BFBFBF',
        darkBTNColor: '#4F90E1',
        darkSecondBTNColor: '#1F579D'
        
      }
    },
  },
  plugins: [],
});