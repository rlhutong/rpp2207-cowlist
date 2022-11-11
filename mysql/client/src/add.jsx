import React, {useState, useEffect} from "react";
import ReactDom from "react-dom/client";
import Axios from "axios";


const Add =({setList})=>{
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return(
    <div>
      This is add form
      <form onSubmit={(e)=>{
        e.preventDefault();
        Axios.post(`http://localhost:3000/api/cows?name=${name}&description=${description}`)
          .then(()=>{
            Axios.get("http://localhost:3000/api/cows")
              .then((result)=>{
                console.log(result);
                setList(result.data);
              })
          })
          .catch((err)=>{
            throw err;
          })
      }}>
        <label>NAME:</label>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
        {/* <input type="text" value={name} onChange={(e) =>{setName(e.target.value)}}/> */}
        <label>DESCRIPTION:</label>
        <input type="text" value={description} onChange={(e) =>{setDescription(e.target.value)}}/>
        <input type="submit" value="submit" />
      </form>
    </div>
  );

};

export default Add;