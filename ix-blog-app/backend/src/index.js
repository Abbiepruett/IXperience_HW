const express = require ("express");
const cors = require("cors");
require("dotenv").config();



const port = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) =>{
    res.send("Hello World")
})

const blogRoutes = require("./routes/blogs");
const categoryRoutes = require("./routes/blogs");




app.use(cors());
app.use(express.json())

app.use("/api/blogs", blogRoutes);//for routes/blogs
app.use("/api/categories", categoryRoutes)//for categories/blogs

app.listen(port,()=> {
    console.log(`Example app listening on port ${port}`);
})