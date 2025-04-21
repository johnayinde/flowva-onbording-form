import React from "react";
import { motion } from "framer-motion";

const CompletionPopup = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40" />
      <motion.div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-lg z-50 max-w-md w-full text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-[#9013FE] mb-4">
          Onboarding Complete!
        </h2>
        <p className="mb-6">Taking you to your dashboard now.</p>

        <motion.button
          className="w-fit py-3 px-6 bg-[#9013FE] text-white font-semibold rounded-xl transition-colors"
          onClick={onClose}
          whileHover={{
            backgroundColor: "#A29BFE",
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          OK
        </motion.button>
      </motion.div>
    </>
  );
};

export default CompletionPopup;
