"use client";
import React from "react";
import { HeroParallax } from "../_Ui/hero-parallax";
import portpic1 from '../../public/portpic1.png'
import portpic2 from '../../public/portpic2.png'
import portpic4 from '../../public/portpic4.png'
import portpic5 from '../../public/portpic5.jpeg'
import portpic6 from '../../public/portpic6.png'
import portpic7 from '../../public/portpic7.png'
import portpic8 from '../../public/portpic8.png'
import portpic9 from '../../public/portpic9.png'
import portpic10 from '../../public/portpic10.png'
import portpic3 from '../../public/portpic3.avif'


export function About() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:portpic1,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:portpic2,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:portpic3,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:portpic4,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:portpic5,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:portpic6,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:portpic7,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:portpic8,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:portpic9,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:portpic10,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:portpic1,
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:portpic2,
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:portpic3,
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:portpic4,
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:portpic5,
  },
];


