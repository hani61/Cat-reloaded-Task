import React from "react";
import image from "../assets/images/6.JPEG"
const Hero = () => {
  return (
    <div className="h-fit flex items-center justify-between px-4 bg-black">
      <div className="w-2/4 text-start p-10">
        <h2 className="text-5.1xl text-[#595959] font-black font-Pop ">I' m</h2>
        <h2 className="text-5.1xl text-white font-extrabold">Hani Ahmed,</h2>
        <h3 className="text-white text-3xl text-wrap pb-5">An Enthusiasic Front-end developer aiming to design
           and develop experiences that make people's lives simple.</h3>
           <button className="bg-[#D21F46] rounded-full font-semibold text-lg text-white py-3 px-5" >See My Projects</button>
      </div>
      <div className="w-2/4 px-8">
      <img src={image} alt="Hani Ahmed" className="object-contain w-4/5 h-4/5"/>
      </div>
    </div>
  )
}
export default Hero;