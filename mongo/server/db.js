const mongoose = require("mongoose");

const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/cows', (err, result)=>{
  if(err){
    throw err;
  }
  console.log("connected to mongoDB");
});

const List = mongoose.model('List', new Schema({
  name: String,
  description: String
}));
// const autoIncrement = require("mongoose-auto-increment");

// const connection = mongoose.createConnection('mongodb://localhost:27017/cows');

// autoIncrement.initialize(connection);


// const listSchema = new Schema({
//   // id: Number,
//   name: String,
//   description: String
// });
// listSchema.plugin(autoIncrement.plugin, 'List');
// const List = connection.model('List', listSchema);



const read =() =>{
  return List.find({});

};

const add =(name, description)=>{
  return List.create({name:name, description:description});

};

module.exports = {read,add};
