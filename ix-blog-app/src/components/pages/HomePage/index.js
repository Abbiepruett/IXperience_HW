import React from "react";

import Heading from "../../Heading";
import Navbar from "../../Navbar";//why wont Navbar show up?
import BlogGrid from "../../BlogGrid";
// import Footer from "../../Footer";//issue with footer
import SubHeading from "../../SubHeading";
import CategoryList from "../../CategoryList";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../../dummy-data.json");
const blogs = data.blogPosts.reverse();
const categories = data.categories;

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}/>
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}/>
        {/* <Footer /> */}
      </div>
    </>
  );
}

