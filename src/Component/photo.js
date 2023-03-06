import React from "react";
import img from "./photo.jpeg";

const Photo =()=>{
    return(
   <>
      <img src={img} className="photo" alt="img"/>
   </>
    );
};

export default Photo;