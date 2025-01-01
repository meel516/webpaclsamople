import React, { useEffect } from "react";

const Next = () => {
  useEffect(()=>{
alert("hello")
  },[])
  return <h1 onClick={()=>{
    alert("hi saleem")
  }}>Welcome to the Next Page!</h1>;
};

export default Next;
