import React from "react";

const ProjectCard = ({image, name,link, Description, Technologies }) => {
  return (
    <div className="w-full h-fit flex justify-between p-6 font-Pop">
      <div className="w-2/4 p-5 ">
      <a href={link}>
      <img src={image}></img>
      </a>
      </div>
      <div className="w-2/4 items-center justify-center p-4">
      <h1 className="text-black font-Pop_Bold text-center text-5.1xl">{name}</h1>
      <p className="text-2xl text-start font-medium p-4">{Description} </p>
      <p className="font-black text-3xl font-Pop_Bold">{Technologies}</p>
      </div>
    </div>
      
  )
}
export default ProjectCard;