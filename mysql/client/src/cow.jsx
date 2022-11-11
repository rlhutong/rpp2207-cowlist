import React, {useState, useEffect} from "react";
import ReactDom from "react-dom/client";

const Cow =({cow,description,setDescription}) =>{


  return (
    <div>
     <span onClick={()=>{setDescription(cow.description)}}>{cow.name}</span>

    </div>
  );
};

export default Cow;