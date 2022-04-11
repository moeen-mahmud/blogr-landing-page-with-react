import { createTheme } from "@mui/system";

const useCustomTheme = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(356, 100%, 66%)",
        light: "hsl(355, 100%, 74%)",
      },
      secondary: {
        main: "hsl(208, 49%, 24%)",
      },
      neutral: {
        main: "hsl(0, 0%, 100%)",
      },
      background: {
        default: "hsl(0, 0%, 100%)",
        veryLightRed: " hsl(13, 100%, 72%)",
        lightRed: "hsl(353, 100%, 62%)",
        veryDarkGreyBlue: "hsl(237, 17%, 21%)",
        veryDarkDesBlue: "hsl(237, 23%, 32%)",
      },
      text: {
        primary: "hsl(0, 0%, 100%)",
        secondary: "hsl(240, 2%, 79%)",
        veryDarkGreyBlue: "hsl(207, 13%, 34%)",
        veryDarkBlackBlue: "hsl(240, 10%, 16%)",
      },
    },
    typography: {
      fontFamily: "'Ubuntu', sans-serif",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  });
  return { theme };
};

export default useCustomTheme;
