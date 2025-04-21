import React from "react";
import { motion } from "framer-motion";

// Animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
};

const StepTransition = ({ children, key }) => {
  return (
    <motion.div
      key={key}
      className="flex flex-col flex-1"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default StepTransition;
