import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
const Test = () => {
  const [accordion, setAccordion] = useState("");
  return (
    <Box>
      <Accordion
        expanded={accordion === "test1"}
        onChange={() => setAccordion("test1")}
      >
        <AccordionSummary expandIcon={">"}>
          <Typography>Test 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>My name i Nikhil. I run this YT Channel</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordion === "test2"}
        onChange={() => setAccordion("test2")}
      >
        <AccordionSummary expandIcon={">"}>
          <Typography>Test 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>My name i Nikhil. I run this YT Channel</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Test;
