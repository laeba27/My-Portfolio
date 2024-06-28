import React from "react";
import { Vortex } from "../_Ui/vortex";
import { TypewriterEffectSmooth } from "../_Ui/typewriter-effect";

export function Hero() {
  const words = [
    {
      text: "Hello",
    },
    {
      text: "I'm",
    },
    {
      text: "Laeba",
    },
    {
      text: "Firdous,",
    },
    {
      text: "Front End",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Developer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="w-screen mx-auto   h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={1000}
        particleCount={700}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        {/* <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          The hell is this?
        </h2> */}
        <div>
          <TypewriterEffectSmooth words={words} />
        </div>
        <div className="mb-6 sm:p-0 px-4">
                <h1 className="text-white text-[28px] max-w-[800px] font-extrabold text-center">
                I like to turn    
                    <span className="relative text-[#a6ff96] my-0 mx-[15px] inline-block">
                        <span className="absolute top-0 left-0 w-full h-full bg-[#b1fa97] opacity-10 -rotate-1">
                        </span>
                        my creative ideas
                    </span>
                    into reality through
                    <span className="relative text-[#ed5ab3] my-0 mx-[15px] inline-block">
                        <span className="absolute top-0 left-0 w-full h-full bg-[#fe56bb] opacity-10 rotate-3"></span>
                        Crafting digital experiences 
                    </span>
                    that leave a lasting impression in the hearts and minds of users.
                </h1>
            </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <div className="border border-neutral-50 rounded-md">
            <button class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-md font-bold cursor-pointer  z-10 group">
              Resume!
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-3 left-5 z-10">
                Download!
              </span>
            </button>
          </div>

          <div className="border border-neutral-50 rounded-md">
            <button class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-md font-bold cursor-pointer  z-10 group">
              Get in Touch!
              <span className="absolute w-36 h-32 -top-8 -left-2   bg-blue-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2  bg-blue-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-3 left-5 z-10">
               Let's Talk!
              </span>
            </button>
          </div>
        </div>
      </Vortex>
    </div>
  );
}
