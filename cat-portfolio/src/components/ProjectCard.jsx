import React from "react";

const ProjectCard = ({image, name, Description, Technologies }) => {
  return (
    <div className="w-full h-fit flex justify-between p-6">
      <div className="w-2/4 p-5 ">
      <a href="https://hani61.github.io/To-Do-List-sass-JavaScript/">
      <img src={image}></img>
      </a>
      </div>
      <div className="w-2/4 items-center justify-center p-4">
      <h1 className="text-black font-black text-center text-5.1xl">{name}</h1>
      <p className="text-2xl text-start font-medium p-4">{Description} </p>
      <p className="font-bold text-3xl">{Technologies}</p>
      </div>
    </div>
      
  )
}
export default ProjectCard;