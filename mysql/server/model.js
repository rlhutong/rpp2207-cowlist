const db = require("./db.js");

module.exports = {
  read: (callback) =>{
    db.query('SELECT * FROM list', (err, result) =>{
      if(err){
        callback(err,null);
      } else{
        console.log(result);
        callback(null, result);
      }
      });
  },
  create: (formData, callback) =>{

    db.query(`INSERT INTO list (name, description)
    VALUES ('${formData.name}','${formData.description}') `, (err,result) =>{
      if(err){
        callback(err, null);
      } else {
        callback(null, result);
      }
      })
  }
};