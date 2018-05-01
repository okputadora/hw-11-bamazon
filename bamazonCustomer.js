const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "4011",
  database: "bamazon"
})

// connect to the db
connection.connect(err => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});


const afterConnection = () => {
  // display all results on load
  connection.query("SELECT * FROM products", (err, res) => {
    if (err) throw err;
    console.log(res);
    prompt()
  })
}

// prompt the user for productId and Qty to buy
const prompt = () => {
  inquirer.prompt([
    {
      name: "idToBuy",
      message: "enter the ID for the product you want to buy",
      type: "input"
    },
    {
      name: "qtyToBuy",
      message: "enter the number of units you want to buy",
      type: "input"
    }
  ]).then(answers => {
    console.log(answers)
  })
}
