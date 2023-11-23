"use client";
import { fadeIn } from "@/utils/motionTransitions";
import { Circle } from "../Circle";
import { motion } from "framer-motion";
import { cardContent } from "./Work.data";
import { useState } from "react";
import { FaLink } from "react-icons/fa6";
import Link from "next/link";

export const Work = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "360px",
      opacity: 1,
    },
    collapsed: {
      width: "200px",
      opacity: 0.6,
    },
  };
  return (
    <div className="h-screen">
      <Circle />
      <div className="grid pb-32 md:min-h-screen mt-28 md:mt-0 place-items-center">
        <div className="">
          <motion.h1
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="my-y text-2xl text-center md:text-4xl"
          >
            My <span className="text-secondary">deploys</span>
          </motion.h1>
          <motion.div
            className="flex flex-col items-center h-full gap-5 px-2 md:flex-row"
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {cardContent.map(
              ({ id, title, description, imageUrl, skills, url }) => (
                <motion.div
                  key={id}
                  className={`card cursor-pointer h-[400px] bg-auto bg-no-repeat bg-center rounded-[20px] ${
                    id == expandedIndex && "expanded"
                  }`}
                  initial={{ opacity: 1 }}
                  variants={cardVariants}
                  animate={id == expandedIndex ? "expanded" : "collapsed"}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleClick(id)}
                  style={{ backgroundImage: `url(/assets/${imageUrl})` }}
                >
                  <div className="flex flex-col justify-end h-full">
                    <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center p-3">
                      <h2 className="text-xl font-semibold text-center text-white">
                        {title}
                      </h2>
                      <Link href={url} target="_blank">
                        <FaLink />
                      </Link>

                      {id === expandedIndex && (
                        <>
                          <p>{description}</p>
                          <div className="flex gap-5 mt-3">
                            {skills.map((data, index) => (
                              <p key={index}>{data.icon}</p>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
