import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box display="grid" justifyContent="center">
        <Typography variant="h2" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="h5" display="flex" justifyContent="center">
          {subtitle}
        </Typography>
    </Box>
  );
};

export default Header;
