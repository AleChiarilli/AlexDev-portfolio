import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Introduction() {
  return (
    <div className="bg-[#131424]/40 w-full z-10">
      <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
        <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
          <motion.div
            className="hidden w-auto h-auto mx-auto md:block"
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Image
              src="/assets/avatar.png"
              priority
              width="400"
              height="300"
              alt="Avatar"
            />
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <h1 className="mb-5 text-4xl leading-tight md:mb-10">
              The art challenges the technology <br />
              <span className="text-secondary">
                and the technology inspires the art.
              </span>
            </h1>
            <p className="max-w-sm  mb-10 text-xl md:max-w-2xl md:mx-0 md:mb-16 md:text-xl">
              Web developer, naturally curious, and perpetually working on
              improving my chops one goal at a time, always looking for fun work
              and great projects.
            </p>

            <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
              <a
                href="/projects"
                className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
              >
                See projects
              </a>
              <a
                href="/contact"
                className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
              >
                Contact me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
