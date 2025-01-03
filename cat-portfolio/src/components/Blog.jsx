import React from "react";
import BlogCard from './BlogCard'
import blog1 from '../assets/images/blog1.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog3 from '../assets/images/blog3.png'
const Blog = () => {
  return (
      <div className="w-full flex flex-col">
        <h1 className="font-Pop_Bold text-5.1xl">My Blog</h1>
        <div className="flex flex-row justify-between gap-4 px-20">
          <BlogCard 
          image ={blog1}
          title={"Why You Can't Depend on Courses Only (Arabic)"}
          description={"....خليني اعرفك ياصديقي إن الكورسات شئ اساسي وده"}
          />
          <BlogCard 
          image ={blog2}
          title={"Why writing notes could be powerful (Arabic)"}
          description={"....انت كا ديفيلوبر هنتعامل مع مشاريع معقدة،او"}
          />
          <BlogCard 
          image ={blog3}
          title={"What happens when you type google.com in your browser"}
          description={"Nearly all individuals who have acce.."}
          />
        </div>
      </div>
  )
}
export default Blog;