const createBlogs = (req, res) => {
    console.log(req.body);
    res.status(200).json({
        message: "Blog created!", 
        data: [],
    })
}

const getBlogs = (req, res) =>{
    res.status(200).json({
        message:"get all blogs",
        data: [],
    })
}


const getBlogByID = (req, res) =>{
    console.log(req.params.id);
    res.status(200).json({
        message:"Get blogs by id",
        data: [],
    })
}

const getBlogByCategoryID = (req, res) =>{
    console.log(req.params.id);
    res.status(200).json({
        message:"get blogs by category",
        data: [],
    })
}

const updateBlogByID = (req, res) =>{
    res.status(200).json({
        message:"update blogs",
        data: [],
    })
}
const deleteBlogByID = (req, res) =>{
    res.status(200).json({
        message:"delete blogs",
        data: [],
    })
}

module.exports = {
    createBlogs,
    getBlogs,
    getBlogByID,
    getBlogByCategoryID,
    updateBlogByID,
    deleteBlogByID
}