import React, {useState, useEffect} from "react";
import ReactDom from "react-dom/client";
import More from "./more.jsx";
import Cow from "./cow.jsx";

const List =({list,setList})=>{
  const[description, setDescription] = useState('');

  return(
    <div>
      <More description={description}/>
      This is list of cows;
      {list.map((cow)=>{
        console.log(cow.name)
        return <Cow cow={cow} description={description} setDescription={setDescription} />
      })}

    </div>
  );

};

export default List;