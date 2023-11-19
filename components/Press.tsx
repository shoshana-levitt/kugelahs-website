import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const Press = () => {
  return (
    <div>
      <Card sx={{ width: 300, maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/shabbat-drop-logo.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              The Shabbat Drop
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Meet Robin Weiss, Kugel Kween
            </Typography>
            <Typography variant="h6" color="text.secondary">
              She makes kugels, she tells jokes, she does it all!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/canvas-rebel-logo.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Canvas Rebel
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Meet Robin Weiss
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Description...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Press;
