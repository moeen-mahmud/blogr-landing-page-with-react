import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Navbar from "./components/Navbar/Navbar";
import useCustomTheme from "./hooks/useCustomTheme";

function App() {
  const { theme } = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box
        bgcolor={theme.palette.background.default}
        fontFamily={theme.typography.fontFamily}
      >
        <Navbar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
