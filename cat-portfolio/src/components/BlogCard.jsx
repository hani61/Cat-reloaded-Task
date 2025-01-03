import React from "react";

const BlogCard = ({image, title,description }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white flex flex-col p-4">
      <img src={image} alt="" className="w-full"></img>
      <div className="px-6 py-4 flex flex-col justify-center gap-2 items-center">
        <div className="text-2xl font-Pop_Bold "><h1>{title}</h1></div>
        <div className="text-xl font-Pop text-ellipsis truncate p-2">{description}
          
        </div>
        <button className="rounded-full border border-black font-semibold text-lg items-end text-black py-3 px-5 w-1/2 ">READ MORE</button>
      </div>
    </div>
  )
}
export default BlogCard;