"use client";
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import Image from "next/image";

export function Circle() {
  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="bottom-0 right-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/assets/avatar_sfera.png"
        width="300"
        height="300"
        className="h-full w-full pointer-events-none"
        alt="Circle"
      />
    </motion.div>
  );
}
