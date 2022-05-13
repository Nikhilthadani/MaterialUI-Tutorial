import React, { useState } from "react";
import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Test = () => {
  const [value, setValue] = useState();
  return (
    <Box>
      <Rating
        precision={0.1}
        size="large"
        value={value}
        onChange={(e, val) => setValue(val)}
      />
      <Typography>Rated {value !== undefined ? value : 0} Stars</Typography>
    </Box>
  );
};

export default Test;
