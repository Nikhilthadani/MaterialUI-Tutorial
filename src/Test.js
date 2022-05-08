import React, { useState } from "react";
import {
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
const arrOptions = ["Profile", "Balance", "Logout"];
const Test = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
        <List>
          {arrOptions.map((elm) => (
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary={elm} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Test;
