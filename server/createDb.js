const mysql = require("mysql2");
const db = require("./app/models");
const User = db.user;
const Booth = db.booth;
const Program = db.program;
const Graphics = db.graphics;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

connection.query("CREATE DATABASE vfairs2", function (err, results) {
  if (err) console.log(err);
  else console.log("База данных создана");
});

connection.end();