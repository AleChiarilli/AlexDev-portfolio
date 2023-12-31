"use client";
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import Image from "next/image";

export const Avatar = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="bottom-0 right-0 hidden md:inline-block md:absolute"
    >
      <Image
        className="pointer-events-none"
        src="/assets/front_avatar_about.png"
        alt="Avatar front"
        width="400"
        height="400"
      />
    </motion.div>
  );
};
