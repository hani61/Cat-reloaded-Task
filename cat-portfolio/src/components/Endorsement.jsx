import React from "react";
import bg from '../assets/images/bg.png'
import quoteImg from '../assets/images/quote.png'
const Endorsement = ({quote, image, name, job}) => {
  return (
    <div className="w-full ">
      <img src={bg} className="object-cover w-full"></img>
      <img src={quoteImg} className="relative bottom-60 float-end mr-32 z-0"></img>
      <p className="text-white lg:text-4xl relative sm:text-lg sm:bottom-28 text-center lg:bottom-40 z-10 left-40 w-full">{quote}</p>
      <div className="flex justify-normal h-fit flex-col w-full">
              <img src={image} className="rounded-full self-center relative w-36 h-36 bottom-44"></img>
              <h1 className="text-center text-black text-4xl relative  bottom-40 font-Pop_Bold">{name}</h1>
              <p className="text-center text-gray-300 text-2xl relative  bottom-36 font-Pop_Bold">{job}</p>


      </div>
    </div>
  )
}
export default Endorsement;