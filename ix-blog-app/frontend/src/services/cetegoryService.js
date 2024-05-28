const getCategories= asynch() => {
    try{
        const res = await fetch(
            "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories",
            {  
                method: "GET",
                headers:{
                    "Content-Type": "application/json",
                },
            }
        )

        const catergoryAPIData = await data.json();
        console.log(catergotyAPIData.message)
        return catergoryAPIData.data
    }catch(err){
        throw new Error(err)
    }
};

