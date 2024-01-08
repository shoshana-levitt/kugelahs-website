import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Typography } from "@mui/material";

const AboutMe = () => {
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
        <Typography variant="h3" padding={2}>
          How It All Started
        </Typography>
        <Typography variant="h6" padding={2}>
          {" "}
          While I was finding myself in NYC, I took a break in 2021 and went
          home for the Jewish High Holy Days. I made the same kugel I make every
          year, except this time it was without the help of my mom. My brother,
          with much enthusiasm, said “This kugel is delicious, Robin, you need
          to sell this!” So, I am doing just that ☺
        </Typography>
        <Typography variant="h3" padding={2}>
          Behind The Name
        </Typography>
        <Typography variant="h6" padding={2}>
          The name "Kugelahs" came upon me all of a sudden, literally in my
          dreams, and I was set on that name ever since. It reflects my
          upbringing and what I want to convey through my kugels. Growing up in
          an Ashkenazi Jewish family, we always used the term of endearment,
          "bubelah." It’s a Yiddish word that translates to "sweetie." It
          creates a sense of nostalgia and warmth. I always knew when things
          were tough, my family called me bubelah and always ensured me that
          everything would be ok. Kugelahs was inspired by this feeling and
          word. My hope is that when someone sees the name and eats my kugel,
          they are immediately overcome with a sense of safety and feel at home.
        </Typography>
      </motion.div>
    </div>
  );
};

export default AboutMe;
