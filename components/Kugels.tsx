import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  Button,
  Box,
  Stack,
  Chip,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  CardActionArea,
} from "@mui/material";
import { AutoAwesome, CalendarMonth } from "@mui/icons-material";
import { KUGEL_FLAVORS, KUGEL_PRODUCTS } from "@/constants";

const Kugels = () => {
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
        <Stack direction="column" spacing={5}>
          <Stack direction="row" spacing={5} alignItems="center">
            {KUGEL_PRODUCTS.map((product) => (
              <Card sx={{ width: 300, maxWidth: 345 }}>
                <CardHeader
                  title={product.product}
                  subheader={product.description}
                />
                <CardMedia
                  component="img"
                  height="140"
                  image={product.imageUrl}
                  alt={product.key}
                />
              </Card>
            ))}
          </Stack>
          <Stack direction="column" spacing={2} alignItems="center">
            <Stack direction="row" spacing={2}>
              <Chip
                icon={<CalendarMonth />}
                key="flavor-of-the-month"
                label="December's Flavor: Feeling Gelty (Pecan Chocolate)"
                variant="filled"
                style={{ backgroundColor: "#primary" }}
                sx={{
                  ":hover": {
                    cursor: "default",
                  },
                }}
              />
              {KUGEL_FLAVORS.map((kugel) => (
                <Chip
                  key={kugel.key}
                  label={kugel.flavor}
                  variant="filled"
                  style={{ backgroundColor: "#primary" }}
                  sx={{
                    ":hover": {
                      cursor: "default",
                    },
                  }}
                />
              ))}
            </Stack>
            {/* <Box sx={{ width: 500 }}> */}
            <Chip
              icon={<AutoAwesome />}
              key="custom-creations"
              label="Custom Creations: Have a specific request? I'll stir up a flavor that's just right for
                you and your guests for your next event!"
              variant="filled"
              style={{ backgroundColor: "#primary" }}
              sx={{
                height: "auto",
                "& .MuiChip-label": {
                  display: "block",
                  whiteSpace: "normal",
                },
                ":hover": {
                  cursor: "default",
                },
              }}
            />
            {/* </Box> */}
          </Stack>
          <Stack direction="row" spacing={5} alignItems="center">
            <Button
              variant="contained"
              color="secondary"
              href="/"
              target="_blank"
            >
              Purchase via Pocketshop
            </Button>
            <Button
              variant="contained"
              color="secondary"
              href="mailto:koolkugels@gmail.com"
              target="_blank"
            >
              Inqiure via Email
            </Button>
          </Stack>
        </Stack>
      </motion.div>
    </div>
  );
};

export default Kugels;
