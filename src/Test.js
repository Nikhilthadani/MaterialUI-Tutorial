import React, { useState } from "react";
import { CircularProgress, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
const Test = () => {
  return (
    <Box>
      <CircularProgress color="secondary" variant="determinate" value={50} />
      <LinearProgress color="inherit" variant="determinate" value={10} />
    </Box>
  );
};

export default Test;
