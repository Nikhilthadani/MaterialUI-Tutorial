import React, { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const Test = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://media.istockphoto.com/photos/aerial-view-of-london-and-the-river-thames-picture-id637710754?k=20&m=637710754&s=612x612&w=0&h=FG9cz6qFrOTMr1ale8bfZvJ3OXn_EONPYAkVmZAbz44="
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Visit To London
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Test;
