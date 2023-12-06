import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  Stack,
  Chip,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  CardActionArea,
} from "@mui/material";
import { AutoAwesome } from "@mui/icons-material";
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
              <motion.div
                key={product.key}
                whileHover={{ scale: 1.02 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
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
              </motion.div>
            ))}
          </Stack>
          <Stack direction="column" spacing={2} alignItems="center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <Chip
                icon={<AutoAwesome />}
                key="feeling-gelty"
                label="December's Flavor: Feeling Gelty (Pecan Chocolate)"
                variant="filled"
                style={{ backgroundColor: "#primary" }}
                sx={{
                  ":hover": {
                    cursor: "default",
                  },
                }}
              />
            </motion.div>
            <Stack direction="row" spacing={2}>
              {KUGEL_FLAVORS.map((kugel) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
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
                </motion.div>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </motion.div>
    </div>
  );
};

export default Kugels;
