"use client";
import React from "react";
import { StickyScroll } from "../_Ui/sticky-scroll-reveal";
import Image from "next/image";
import project1 from "../../public/swiggy.png";
import project2 from "../../public/meeting.png";
const content = [
  {
    title: " Swiggy clone",
    description:
      "Integrated Swiggy API to fetch and display real-time data for restaurants, menus, and user orders.Implemented Tailwind CSS for efficient and consistent styling across the application.Managed global state using context API to ensure seamless data flow and user experience.Ensured high performance and optimized loading times through code splitting and lazy loading. Technologies Used: Swiggy API, React.js, Tailwind CSS.",
    content: (
<div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={project1}
          width={200}
          height={300}
          className="h-full w-full object-cover"
        />
</div>
    ),
  },
  {
    title: "Meeting Scheduler",
    description:
      "Integrated Swiggy API to fetch and display real-time data for restaurants, menus, and user orders.Implemented Tailwind CSS for efficient and consistent styling across the application.Managed global state using context API to ensure seamless data flow and user experience.Ensured high performance and optimized loading times through code splitting and lazy loading. Technologies Used: Swiggy API, React.js, Tailwind CSS.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
         <Image
          src={project2}
          width={500}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
 
];
export function Projects() {
  return (
    <div className="">
    
      <StickyScroll content={content} />
    </div>
  );
}
