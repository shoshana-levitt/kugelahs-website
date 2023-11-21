import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const Press = () => {
  const pageVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.1 },
    },
    hidden: { opacity: 0, scale: 1, x: -50 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div>
      <motion.div
        ref={ref}
        variants={pageVariant}
        initial="hidden"
        animate={control}
      >
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
      </motion.div>
    </div>
  );
};

export default Press;
