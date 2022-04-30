import React from "react";
import { Button } from "@mui/material";
const Test = () => {
  return (
    <div>
      <Button
        onClick={() => alert("Button Clicked")}
        color="success"
        sx={{ margin: 3 }}
        size="large"
        variant="contained"
      >
        First
      </Button>
      <Button
        onClick={() => alert("Button Clicked")}
        color="error"
        sx={{ margin: 3 }}
        size="medium"
        variant="outlined"
      >
        Second
      </Button>
      <Button
        onClick={() => alert("Button Clicked")}
        color="info"
        sx={{ margin: 3 }}
        size="small"
        variant="text"
      >
        Third
      </Button>
    </div>
  );
};

export default Test;
