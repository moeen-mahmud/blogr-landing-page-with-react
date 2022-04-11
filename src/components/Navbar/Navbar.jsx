import React from "react";
import { AppBar, Button, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";

const Navbar = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h1">Hello</Typography>
    </Box>
  );
};

export default Navbar;
