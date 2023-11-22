"use client";
import { fadeIn } from "@/utils/motionTransitions";
import { Circle } from "../Circle/Circle";
import { motion } from "framer-motion";
import { Slider } from "./Slider";

export const Stack = () => {
  return (
    <div className="flex items-center justify-center h-screen -z-1">
      <Circle />
      <div className="flex flex-col md:flex-row gap-x-5">
        <div className="flex flex-col text-center md:text-left md:w-[30vw] mb-10 mr-10">
          <motion.h1
            className="mb-4 text-3xl"
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            My
            <span className="text-secondary">Stack</span>
          </motion.h1>
          <motion.p
            className="max-w-md"
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            A passionate web developer diving into the digital flows with the
            excitement of a never-ending sailor. My code is the log of my
            travels through cyberspace, where every line tells a story of
            challenges overcome and ingenious solutions.<br></br>Let&apos;s go
            beyond code and build the future together!
          </motion.p>
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Slider />
      </motion.div>
    </div>
  );
};
