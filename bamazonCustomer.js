const inquirer = require('inquirer');
const mysql = require('mysql');

// connect to the db
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


// display all results on load
const afterConnection = () => {
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
      name: "id",
      message: "enter the ID for the product you want to buy",
      type: "input"
    },
    {
      name: "qty",
      message: "enter the number of units you want to buy",
      type: "input"
    }
  ]).then(answers => {
    checkDb(answers)
  })
}

// check the db for user request
const checkDb = productInfo => {
  let id = productInfo.id;
  let qty = productInfo.qty;
  connection.query("SELECT * FROM products WHERE id = ?", id, (err, resp) => {
    if (err){
      return console.log("the product id you entered does not exist")
    }
    if (resp[0].qty >= qty){
      console.log("your purchase has been completed")
      updateDb(id, qty)
      return;
    }
    console.log("There is an insufficient quantity of this product, your order has not been filled.")
  })
}
