import React, { useEffect, useState } from "react";

const Next = () => {
  useEffect(()=>{
alert("hello")
  },[])
  let [count,setCount] =useState(0)
  return <h1 onClick={()=>{
   setCount(prev=>prev+1)
  }}>Welcome to the Next Page! count is {count}</h1>;
};

export default Next;
