import React from "react";

function Card({username,btntxt}){
    // console.log("name",username)
    return(
        <>
      
    <figure className=" md:flex bg-slate-100 rounded-xl p-4 md:p-0 dark:bg-slate-800 mb-2">
  <img className="w-24 h-24 md:rounded-non rounded-full mx-5 mt-5" src="src/assets/eagle.jpg" alt="" width="384" height="512"></img>
  <div className="pt-6 md:p-2 text-center space-y-4 w-60">
    <blockquote>
      <p className="text-xs font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Software Engineer, Karnataka
      </div>
    </figcaption>
    <br />
    <button className='mt-2 inline-flex cursor-pointer
    items-center text-sm font-semibold text-black bg-slate-600'>
      {btntxt || "visit me"} →
    </button>
  </div>
</figure>
    </>
    )
}

export default Card