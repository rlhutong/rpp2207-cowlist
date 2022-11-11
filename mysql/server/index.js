const express = require("express");
const path = require("path");
const db = require("./db.js");
const model = require("./model.js");

const app = express();
app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(express.json());

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname,"/../client/dist/index.html"));
});

app.get('/api/cows', (req, res) =>{
  model.read((err, result) =>{
    if(err) {
      throw err;
    }
    console.log('get result in index',result);
    res.send(result);
  })
});

app.post('/api/cows',(req,res)=>{
  let query=req.query;
  console.log(query);
  model.create(query,(err,result) =>{
    if(err) {
      throw err;
      res.sendStatus(404);
    }
    console.log(result);
    res.sendStatus(201);
  })
});

app.listen(3000, (err, result) =>{
  if(err){
    throw err;
  }
  console.log("listening on port 3000");
})


