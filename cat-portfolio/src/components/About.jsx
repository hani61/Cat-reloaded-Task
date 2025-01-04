import React from "react";
import aboutImg from '../assets/images/About.JPEG'
const About = () => {
  return (
    <div className="w-full h-fit flex mt-12 ">
      <div className="w-2/5 p-10 ml-10"> 
        <img src={aboutImg} className="object-contain"/>
      </div>
      <div className="w-3/5 text-start p-20">
      <h1 className="text-black font-Pop_Bold text-5.1xl text-start ">ABOUT ME</h1>
      <h2 className="text-7xl text-gray-300 font-Pop_Bold mb-5 ">WHO AM I</h2>
      <p className="text-wrap text-3xl pb-16 sm:text-base w-5/6">I’m Hani Ahmed a final-year student at Damietta University in the Faculty of Computer and Artificial Intelligence, specializing in programming and computer science. My journey in tech has been shaped by a passion for innovation and problem-solving, which has driven me to explore fields like machine learning, web development, and front-end design.</p>
    <div className="w-1/2 justify-around gap-7 flex">  
      <button className="rounded-full border border-black bg-black text-white px-5 py-3 sm:py-3 sm:px-7 text-lg">Hire Me</button>
     <button className="rounded-full border border-black  text-black px-5 py-3 sm:py-3 sm:px-7 text-lg"><a href="https://drive.google.com/file/d/1hFPdu59qgkkO1hEkvcRS5PYctlshVUGN/view?usp=sharing">See My Resume</a></button>
    </div>
     </div>
    </div>
  )
}
export default About;