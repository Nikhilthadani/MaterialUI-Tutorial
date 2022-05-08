import React, { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { Box } from "@mui/system";
const Test = () => {
  const [open, setOpen] = useState(true);
  return (
    <Box>
      <Snackbar
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        open={open}
      >
        <Alert severity="success">This is a sucess message</Alert>
      </Snackbar>
    </Box>
  );
};

export default Test;
