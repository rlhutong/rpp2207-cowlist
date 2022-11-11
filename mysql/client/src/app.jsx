import React, {useState, useEffect} from "react";
import ReactDom from "react-dom/client";
import Axios from "axios";
import Add from "./add.jsx";
import List from "./list.jsx";
import async from "async";
import "regenerator-runtime/runtime.js";


const App =()=>{
  const [list, setList] = useState([]);

  useEffect(()=>{
     (async()=>{
      let result = await Axios.get("http://localhost:3000/api/cows");
      console.log('result in app', result);
      setList(result.data);}

     )();
    // (Async()=>{let result = await Axios.get("http://localhost:3000/api/cows");
    // console.log('result in app', result);}
    // )();
  },[]);

  return(
    <div>
      Cow List


      <List list={list} setList={setList} />
      <Add setList={setList} />
    </div>
  );

};

export default App;