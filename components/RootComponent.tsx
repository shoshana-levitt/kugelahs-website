import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const RootComponent: React.FC = () => {
  const router = useRouter();
  // Check if the current route is the root URL
  const isRoot = router.pathname === "/";
  // Render the component only if it's the root URL
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
  return isRoot ? (
    <div>
      <motion.div
        ref={ref}
        variants={pageVariant}
        initial="hidden"
        animate={control}
      >
        <p className="py-3">
          Kugelahs is a small woman-owned business founded by Robin Weiss. Her
          goal is to spread love for this unique Jewish dish and to bring the
          Jewish community together ♥
        </p>
        <p className="py-3">
          Robin Weiss is a Kugler, Komedian and works a 9-5. She enjoys building
          community and spreading joy and laughter through her kugels comedy.
          She produces a monthly show with her former hebrew school teacher.
        </p>
      </motion.div>
    </div>
  ) : null;
};

export default RootComponent;
