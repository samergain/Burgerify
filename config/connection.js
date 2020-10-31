const mysql = require("mysql");

const connection = mysql.createConnection( {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "DansPassword",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) { throw err }
    console.log("connected to burgers_db with id:", connection.threadId);
})

module.exports = connection;