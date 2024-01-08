import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  CardActionArea,
  Stack,
} from "@mui/material";
import { PRESS_ARTICLES } from "@/constants";

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
        <Typography variant="h3" align="center" padding={3}>
          Featured In
        </Typography>
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="center"
          spacing={5}
        >
          {PRESS_ARTICLES.map((article) => (
            <motion.div
              key={article.publication}
              whileHover={{ scale: 1.02 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <Card sx={{ width: 300, maxWidth: 345 }}>
                <CardActionArea href={article.url} target="_blank">
                  <CardHeader
                    title={article.publication}
                    subheader={article.title}
                  />
                  <CardMedia
                    component="img"
                    height="140"
                    image={article.imageUrl}
                    alt={article.publication}
                  />
                  <CardContent>
                    <Typography variant="subtitle1" color="text.secondary">
                      {article.blurb}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </motion.div>
    </div>
  );
};

export default Press;
