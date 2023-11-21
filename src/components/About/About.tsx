"use client";
import { Avatar } from "../Avatar/Avatar";
import { motion } from "framer-motion";
import { motionTransitionsAbout } from "@/utils/motionTransitions";
import { dataAboutSkills, dataCounter } from "./About.data";
import CountUp from "react-countup";
import { useState } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";

export const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="items-center min-h-screen px-6 mx-auto align-middle mt-36 md:mt-0 md:flex md:max-w-4xl pb-36 md:pb-0">
      <Avatar />

      <motion.div
        initial={motionTransitionsAbout.initial}
        animate={motionTransitionsAbout.animate}
        transition={motionTransitionsAbout.transition}
      >
        <h1 className="mb-2 md:text-4xl">
          Building websites <br />
        </h1>
        <span className="text-secondary md:text-4xl">
          with exciting designes
        </span>
        <p className="mt-8">
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>

        <div className="grid justify-between grid-cols-2 gap-3 my-8 md:flex md:grid-cols-4 md:gap-6">
          {dataCounter.map(
            ({ id, endCounter, text, lineRight, lineRightMobile }) => (
              <div key={id} className={`${lineRight && "ltr"}`}>
                <div
                  className={`${
                    lineRight &&
                    "px-4 border-r-2 border-transparent md:border-gray-100"
                  } ${lineRightMobile && "border-e-gray-100"}`}
                >
                  <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                    + <CountUp end={endCounter} start={0} duration={5} />
                  </p>
                  <p className="test-xs uppercase mx-w-[100px]">{text}</p>
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex flex-col mb-3 md:flex-row justify-evenly md:mt-28 md:mb-5">
          {dataAboutSkills.map((dataText, itemIndex) => {
            const { id, text } = dataText;
            return (
              <div
                key={id}
                className={`${
                  index == id
                    ? "text-secondary duration-300 transition-all border-secondary"
                    : "border-white"
                }
              cursor-pointer md:text-lg relative px-2 md:px-8 py-4 border-2 round flex justify-between items-center my-3
              `}
                onClick={() => setIndex(itemIndex)}
              >
                <p className="mr-4 text-md md:text-lg">{text}</p>
                {index === id ? <BiDownArrow /> : <BiLeftArrow />}
              </div>
            );
          })}
        </div>
        <div className="max-w-4xl p-4 mx-auto bg-secondary/20 rounded-xl">
          {dataAboutSkills[index].skills.map((items, index) => (
            <div
              key={index}
              className="flex justify-center max-w-md gap-4 mx-auto border-b border-gray-500"
            >
              <span className="max-w-[320px]">{items.title}</span> -{" "}
              <span>{items.date}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
