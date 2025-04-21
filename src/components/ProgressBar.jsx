import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="h-2.5 bg-gray-200 rounded-full mb-8 overflow-hidden">
      <motion.div
        className="h-full bg-[#9013FE]"
        initial={{ width: `${(currentStep / totalSteps) * 100}%` }}
        animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default ProgressBar;
