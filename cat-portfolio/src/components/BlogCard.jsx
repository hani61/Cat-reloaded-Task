import React from "react";

const BlogCard = ({image, title,description }) => {
  return (
    <div className="max-w-sm rounded-xl min-h-full shadow-lg bg-white flex gap-6 h-full px-6 py-4  items-center flex-col p-4">
      <img src={image} alt="" className="w-96 h-56"/>
      
        <div className="text-2xl font-Pop_Bold h-14  "><h1>{title}</h1></div>
        <div className="text-xl font-Pop text-ellipsis truncate h-14 p-5">{description}
          
        </div>
        <div className="content-end w-full self-end ">
           <button className="rounded-full border  border-black font-semibold text-lg text-black py-3 px-5 w-1/2 hover:bg-black hover:text-white ">READ MORE</button>
        </div>
       
      </div>
    
  )
}
export default BlogCard;