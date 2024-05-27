import React, {useEffect, useState} from "react";

import Heading from "../../Heading";
import Navbar from "../../Navbar";//why wont Navbar show up?
import BlogGrid from "../../BlogGrid";
// import Footer from "../../Footer";//issue with footer
import SubHeading from "../../SubHeading";
import CategoryList from "../../CategoryList";


import blogService from "../../../services/blogService";
// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../../dummy-data.json");
const blogs = data.blogPosts.reverse();
const categories = data.categories;



export default function HomePage() {
  const[blogs, setBlogs] = useState()


  useEffect(()=>{

    const fetchBlogs = async () =>{
      try{
        const blogsRes = await blogService.getBlogs();
        setBlogs(blogsRes)
      }catch(err){
        console.log(err)
      }
    };
  fetchBlogs();
  }, []);



  return (
    <>
      <Navbar />
      <Heading />
      <div className="container">
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}/>
        {/* <SubHeading subHeading={"Categories"} /> */}
        <CategoryList categories={[]}/>
        {/* <Footer /> */}
      </div>
    </>
  );
}

