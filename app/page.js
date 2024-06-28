import Image from "next/image";
import {Hero} from "./Components/Hero";
import {About} from "./Components/About";
import {Skill} from './Components/Skill'
import  {Projects}  from "./Components/Projects";

export default function Home() {
  return (
  <div>
  
    <Hero/>
    <About/>
    <Skill/>
    <Projects/>
   
  </div>
  );
}
