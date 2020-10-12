// const connection = require("../db/database");
// // simple query
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// // with placeholder
// connection.query(
//   "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
//   ["Page", 45],
//   function (err, results) {
//     console.log(results);
//   }
// );

// createProduct = () => {
//   const query = connection.query(
//     "INSERT INTO products SET ?",
//     {
//       flavor: "Rocky Road",
//       price: 3.0,
//       quantity: 50,
//     },
//     function (err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " product inserted!\n");
//       // Call updateProduct() AFTER the INSERT completes
//       updateProduct();
//     }
//   );
//   // logs the actual query being run
//   console.log(query.sql);
// };

// updateProduct = () => {
//   const query = connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//       {
//         quantity: 100,
//       },
//       {
//         flavor: "Rocky Road",
//       },
//     ],
//     function (err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " products updated!\n");
//     }
//   );
// };

// deleteProduct = () => {
//   const query = connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: "strawberry",
//     },
//     function (err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts() AFTER the DELETE completes
//       readProducts();
//     }
//   );
// };

// readProducts = () => {
//   connection.query("SELECT * FROM products", function (err, res) {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// };
