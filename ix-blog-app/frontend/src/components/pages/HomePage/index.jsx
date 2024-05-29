import React, {useEffect, useState} from "react";

import Heading from "../../Heading";
import Navbar from "../../Navbar";//why wont Navbar show up?
import BlogGrid from "../../BlogGrid";
// import Footer from "../../Footer";//issue with footer
import SubHeading from "../../SubHeading";
import CategoryList from "../../CategoryList";

//import the blog and category service
import blogService from "../../../services/blogService";
import categoryService from "../../../services/categoryService"






export default function HomePage() {
  const[blogs, setBlogs] = useState()
  const[categories, setCategories] = useState()


  useEffect(()=>{

    const fetchBlogs = async () =>{
      try{
        const blogsRes = await blogService.getBlogs();
        const categoryRes = await categoryService.getCategories()
        setBlogs(blogsRes)
        setCategories(categoryRes)
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
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={[]}/>
        {/* <Footer /> */}
      </div>
    </>
  );
}