import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
const Test = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      margin={10}
      border={10}
      borderColor={"red"}
      borderRadius={10}
      padding={10}
    >
      <Box>
        {" "}
        <Typography>This is inside Box</Typography>
      </Box>

      <Button>Click Me</Button>
      <TextField />
    </Box>
  );
};

export default Test;
