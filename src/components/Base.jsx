import React, { useEffect, useState } from "react";

export default function Base(){
    let [count,setCount] =useState(0)
    return(<> <div>
{
    count
}
    </div>
    <button onClick={()=>{
        setCount(prev=>prev+1)
    }}>+</button>
     <button onClick={()=>{
        setCount(prev=>prev-1)
    }}>-
    </button>
    </>)
}