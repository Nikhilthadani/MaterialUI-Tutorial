import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Box } from "@mui/system";
import { AppBar, IconButton, Toolbar } from "@mui/material";

const Test = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton onClick={() => alert("Icon Selected")}>
            {" "}
            <AccountCircleIcon />
          </IconButton>
          <IconButton>
            {" "}
            <ArrowCircleDownIcon color="error" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Test;
