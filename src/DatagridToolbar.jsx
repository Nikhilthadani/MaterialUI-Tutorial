import React from "react";
import {
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";
const DatagridToolbar = () => {
  return (
    <Box display="flex" gap={4} m={1}>
      <GridToolbarExport />
      <GridToolbarFilterButton />
      <GridToolbarQuickFilter />
    </Box>
  );
};

export default DatagridToolbar;
