import React from "react";
const Navbar = () => {
  return (
    <nav className={`fixed w-full bg-black py-3 z-20`}>
       <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-4xl font-bold text-white font-Bahn py-3">Hani Ahmed</a>
          

          <div className=" md:flex space-x-8 ">
            <a href="#about" className="text-white font-Pop  text-lg hover:underline decoration-1   py-1">About</a>
            <a href="#skills" className="text-white font-Pop text-lg hover:underline decoration-1  py-1">Skills</a>
            <a href="#projects" className="text-white font-Pop text-lg hover:underline decoration-1   py-1">Projects</a>
            <a href="#contact" className="text-white font-Pop text-lg hover:underline decoration-1   py-1">Contact</a>
           <button className=' border px-4  border-white rounded-full text-white font-roboto'>Hire Me</button>
          </div>
          
          </div>
      </div>
    </nav>
  )
}
export default Navbar;