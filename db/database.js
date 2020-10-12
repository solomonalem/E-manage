// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id ");
});

module.exports = connection;
