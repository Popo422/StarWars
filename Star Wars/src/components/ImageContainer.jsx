import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";
import {
  Height,
  Wc,
  CalendarMonth,
} from "@mui/icons-material";
const ImageContainer = ({ imageSrc, name,height,gender,birth_year }) => {
  return (
    <Grid justifyContent="center">
      <Box maxWidth={350} margin={2}>
        <img src={imageSrc} style={{ width: "100%", borderRadius: "8px 8px 0 0" }} />
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Box display="flex" justifyContent="flex-start">
          <Height/>
          <Typography variant="b2" component="div" color="gray" ml="15px">
            {height}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-start">
        <Wc/>
        <Typography variant="b2" component="div" color="gray" ml="15px">
          {gender}
        </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-start">
        <CalendarMonth/>
        <Typography variant="b2" component="div" color="gray" ml="15px">
          {birth_year}
        </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default ImageContainer;
