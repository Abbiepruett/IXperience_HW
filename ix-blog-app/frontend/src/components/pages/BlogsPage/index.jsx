import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import Heading from "../../Heading";
import BlogList from "../../BlogList";
//import Footer from "../../Footer";

import "./index.css";

// Importing dummy data
 const data = require("../../../dummy-data.json");
 let blogsDummyData = data.blogPosts;
 const categoriesDummyData = data.categories;
 
 //how to replace the dummy data??
fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs")
  .then(res => {
    console.log("response recieved")
    return res.json();//convert to js
  })
  .then(data => {
    console.log("json parsed")
    console.log(data)
    console.log("it works")
  }).catch(error => {
    console.error("fetch error: ", error)
  })


//get the data here

export default function BlogsPage() {
  //Initializing our states:
 const [blogs, setBlogs] = useState(blogsDummyData);
//const[displayBlogs, setDisplayBlogs]= useState(blogsDummyData)
  const [categoryId, setCategoryId] = useState();

  const callbackFunction = () =>{
    if (categoryId){
      const filterBlogs = blogsDummyData.filter((blog) =>{
        return blog.categories.some((category) => category.id=== categoryId);
      });
      setBlogs(filterBlogs);

    }
  };
  useEffect(callbackFunction,[categoryId])

  // console.log(categoryId);
  const CategoriesList = ({categoryId}) => {
    return categoriesDummyData.map((category) => {//for each category return some object (UI)
      return  categoryId === category.id ? (

        <button
          key={category.id}//why do we have a key on elementes(so react can uniquiely identify them)
          onClick={() => setCategoryId(category.id)}
          style={{ color: "blue" }}//blue if category prop entered does == the id
        >
          <p key={category.id}>{category.title}</p> {/*content is category.title*/}
        </button>
      ) : (
        <button
          key={category.id}
          onClick={() => setCategoryId(category.id)}
          style={{ color: "black" }}
        >
          <p key={category.id}>{category.title}</p>
        </button>
      );
    });
  };

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