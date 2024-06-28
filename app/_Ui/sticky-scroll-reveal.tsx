"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../Utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <div className="max-w-screen">
      <motion.div
    
    animate={{
      backgroundColor: backgroundColors[activeCard % backgroundColors.length],
    }}
    className="h-[100vh]  overflow-y-auto flex justify-between px-[80px] py-[30px] item-center relative space-x-10  snap snap-y "
    ref={ref}
    
  >
    <div className="div relative flex items-start px-4 snap-center">
      <div className="max-w-3xl">
     <h2 className='text-white  font-extrabold text-6xl'>Projects</h2>
        {content.map((item, index) => (
          <div key={item.title + index} className="my-20 snap-start">
            <motion.h2
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              className="text-2xl font-bold text-slate-100"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              className="text-kg text-slate-300 max-w-sm mt-10"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
        <div className="h-40" />
      </div>
    </div>
    <motion.div
      animate={{
        background: linearGradients[activeCard % linearGradients.length],
      }}
      className={cn(
        "hidden lg:block h-[25rem] w-[40rem] rounded-md bg-white sticky top-20 overflow-hidden",
        contentClassName
      )}
    >
      {content[activeCard].content ?? null}
    </motion.div>
  </motion.div>
    </div>
    
  );
};
