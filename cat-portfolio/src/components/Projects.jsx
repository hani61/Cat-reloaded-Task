import React from "react";
import img1 from '../assets/images/1.JPEG'
import img2 from '../assets/images/2.JPEG'
import img3 from '../assets/images/3.JPEG'
const Projects = () =>{
  return (
    <div className="w-full font-pop">
      <h1 className="text-slate-400 text-5.1xl font-extrabold"> Worked with</h1>
      <div className="w-full h-40 gap-32 flex justify-center">
      <img src={img1}></img>
      <img src={img2}></img>
      <img src={img3}></img> {/*  I hope To :) */ }
      </div>
      <div>
        <h1 className="text-black font-black text-center text-5.1xl">Projects</h1>
        
      </div>
    </div>
  )
}
export default Projects;