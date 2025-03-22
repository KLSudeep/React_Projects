import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data=useLoaderData()
    // const [data,SetData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=>response.json())
    //     .then(data =>{
    //         console.log(data);
    //         SetData(data)
    //     })

    // },[])
    return(
        <div className="text-center m-4 bg-green-600 text-white p-4 text-3xl">
            Github followers:{data.followers}
            <img src={data.avatar_url} alt="Git picture"  width={300}/>
        </div>
    )
}

export default Github

export const githubInfoLoader=async()=>{
   const response=await fetch('https://api.github.com/users') 
    return response.json()
}
