import React, { useState } from "react";
import { Alert } from "@mui/material";
import { Box } from "@mui/system";
const Test = () => {
  const [show, setShow] = useState(true);
  return (
    <Box>
      {show && (
        <Alert onClose={() => setShow(false)} severity="info">
          This is an Info Alert
        </Alert>
      )}
    </Box>
  );
};

export default Test;
