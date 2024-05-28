import React from "react"

import {useParams} from "react-router-dom";

export default function BlogPage(){
    const {blogId} = useParams();

    function printHI(){
        console.log("hi")
    }

    const callBackFunction = () =>{
        console.log("There1")
    }


    function printThere(){
        setTimeout(callBackFunction, 0)
    }


    function printIX(){
        console.log("IX")
    };

    printHI();
    printThere();
    printIX();

    return <div>Todo build the read blog page</div>;
}
