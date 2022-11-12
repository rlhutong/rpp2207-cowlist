const express=require("express");
const path = require("path");
const {read, add} = require("./db.js");

const app=express();

app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(express.json());

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, "/../client/index.html"));
})

app.post('/api/cows', (req, res)=>{
   console.log(req.query);
   let name=req.query.name;
   let description=req.query.description;
   add(name,description)
     .then((result)=>{
      res.send(result);
     })

}
);

app.get('/api/cows', (req, res)=>{
  console.log(req.query);

  read()
    .then((result)=>{
     res.send(result);
    })

}
);

app.listen(3000, (err,result) =>{
  if(err){
    throw err;
  }

  console.log("server listening on port 3000");
})