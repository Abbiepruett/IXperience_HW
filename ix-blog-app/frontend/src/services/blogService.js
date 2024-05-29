


const getBlogs = async () =>{
    try{
        const data = await 
    
        fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs",{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
            },

        });
        const blogsApiData = await data.json();//await means it will stop and wait until this line is executed
        return blogsApiData.data;
    }

    catch(error){
        throw new Error(error)
    }    
};

const getBlogsByCategoryID = async (categoryID) =>{
    try{
        const data = await 
    
        fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs/category/" + categoryID,{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
            },

        });
        const blogsApiData = await data.json();//await means it will stop and wait until this line is executed
        return blogsApiData.data;
    }

    catch(error){
        throw new Error(error)
    }    
};







const blogService = {
    getBlogs:getBlogs,
    getBlogsByCategoryID
};

export default blogService;

//async means you will reaturn a new promise
//await means .then and must always be wrapped in a try catch block
//error handling wrapped in try catch servers 
//what is an arrow function for

