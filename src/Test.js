import React from "react";
import { Container } from "@mui/material";
const Test = () => {
  return (
    <div>
      <Container sx={{ background: "green" }} maxWidth="xs">
        This is XS
      </Container>
      <br />
      <Container sx={{ background: "green" }} maxWidth="sm">
        This is SM
      </Container>
      <br />
      <Container sx={{ background: "green" }} maxWidth="md">
        This is MD
      </Container>
      <br />
      <Container sx={{ background: "green" }} maxWidth="lg">
        This is LG
      </Container>
      <br />
      <Container sx={{ background: "green" }} maxWidth="xl">
        This is XL
      </Container>
    </div>
  );
};

export default Test;
