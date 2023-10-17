import React from "react";
import Header from "../components/Header";
import { Box } from "@mui/material";
import Characters from "../components/Characters";
import FlexBetween from "../components/FlexBetween";

const Home = () => {
  console.log(import.meta.env)
  return (
    <>
      <Header title="Star Wars" subtitle="Characters" />
      <Box display="flex" width="100%" height="100%" justifyContent="center">
        <FlexBetween>
          <Box margin="1.5rem 2.5rem">
            <Characters />
          </Box>
        </FlexBetween>
      </Box>
    </>
  );
};

export default Home;
