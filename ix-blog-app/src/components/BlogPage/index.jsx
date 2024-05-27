import React from "react"

import {useParams} from "react-dom"

export default function BlogPage(){



function printHI(){
    console.log("hi")
    
}

const callBackFunction = () =>{
    console.log("There1")
 }


function printThere(){
    setTimeout(()=>{
        console.log(callBackFunction())
    }, 500)
}


function printIX(){
    console.log("IX")
};

printHI()
printThere()
printIX()


return <div>TODO build </div>

}
