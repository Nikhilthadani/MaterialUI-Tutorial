import React from "react";

import { Box, Typography, useTheme } from "@mui/material";

const Test = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <Box>
      <Typography variant="h1" color="primary">
        Hello World
      </Typography>
    </Box>
  );
};

export default Test;
