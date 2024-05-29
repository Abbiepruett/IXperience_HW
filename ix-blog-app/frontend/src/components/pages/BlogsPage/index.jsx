import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import Heading from "../../Heading";
import BlogList from "../../BlogList";
//import Footer from "../../Footer";

import "./index.css";
import { useParams, Link } from "react-router-dom";

//import blog and category service
import blogService from "../../../services/blogService"
import categoryService from "../../../services/categoryService"


//get the data here

export default function BlogsPage() {
  //Initializing our states:
  const {categoryId} = useParams()

  const [blogs, setBlogs] = useState();
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);



//starting new here
useEffect(() => {
  const fetchData = async() =>{
    const blogsRes = await blogService.getBlogsByCategoryID(categoryId);
    const categoriesRes = await categoryService.getCategories();

    setBlogs(blogsRes)
    setCategories(categoriesRes)
    setLoading(false)
  };

  fetchData()
}, [categoryId])




  const CategoriesList = ({categoryId}) => {
    if(!categories && !categories?.length){
      return null
    }

    return categories.map((category) => {//for each category return some object (UI)
      return  categoryId === category.id ? (
//update here
          <Link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "blue" }}
          onClick={() => setLoading(true)}
          >
          <p key={category.id}>{category.title}</p>
          </Link>
          ) : (
          <Link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "black" }}
          onClick={() => setLoading(true)}
>
          <p key={category.id}>{category.title}</p>
        </Link>
      );
    });
  };

  if (loading){
    return(
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border" role = "status">
          <span class = "visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }


  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList  categoryId = {categoryId}/>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        <BlogList blogPosts={blogs} />
      </div>
       {/* <Footer />  */}
    </>
  );
}