const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "4011",
  database: "bamazon"
})

connection.connect(err => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});


const afterConnection = () => {
  connection.query("SELECT * FROM products", (err, res) => {
    if (err) throw err;
    console.log(res);
    prompt()
  })
}
// display all results on load
