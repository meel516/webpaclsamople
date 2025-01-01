import React, { useEffect } from "react";

const About = () => {
  useEffect(()=>{
alert("hello")
  },[])
  return <h1 onClick={()=>{
    alert("hi saleem")
  }}>Welcome to the Next Page!</h1>;
};

export default About;
