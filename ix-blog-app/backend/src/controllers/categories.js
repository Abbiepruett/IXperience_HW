const createCategories = (req, res) => {
    console.log(req.body);
    res.status(200).json({
        message: "Blog created!", 
        data: [],
    })
}

const getCategories = (req, res) =>{
    res.status(200).json({
        message:"get all blogs",
        data: [],
    })
}


const getCategoryByID = (req, res) =>{
    console.log(req.params.id);
    res.status(200).json({
        message:"Get blogs by id",
        data: [],
    })
}



const updateCategoryByID = (req, res) =>{
    res.status(200).json({
        message:"update blogs",
        data: [],
    })
}
const deleteCategoryByID = (req, res) =>{
    res.status(200).json({
        message:"delete blogs",
        data: [],
    })
}

module.exports = {
    createCategories,
    getCategories,
    getCategoryByID,
    updateCategoryByID,
    deleteCategoryByID
}