import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Events = () => {
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
        <div>Events</div>
      </motion.div>
    </div>
  );
};

export default Events;
