const mysql = require("mysql2");
const promise = require("bluebird");

const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  database:"cows"
});

const db = promise.promisifyAll(connection, {multiArgs:true});

db.connectAsync()
  .then(()=>{console.log("connected to mysql")})
  .then(
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS list (
        id INT AUTO_INCREMENT NOT NULL,
        name VARCHAR(20) NOT NULL,
        description VARCHAR(500) NOT NULL,
        PRIMARY KEY(id)
      )`
    )
  )
  .catch(err=>{throw err;});

module.exports = db;
