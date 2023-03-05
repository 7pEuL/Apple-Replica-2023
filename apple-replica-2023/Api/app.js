// import { createConnection } from "mysql";
// import express, { json, urlencoded } from "express";
const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

// For Legacy Browser Support
const corsOption = {
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200,
}

// Creating Server
const app = express();

// Enable All CORS Requests
app.use(cors(corsOption)); // For Legacy Browser Support Attached this
const port = 2023;

// Middleware to extract info from the Fronted Json file
app.use(express.json());

// Middleware to extract info from the HTML name attribute
app.use(express.urlencoded({ extended: true }));

// Main Page
app.use(express.static("ADDiPhone"));

app.listen(port, () => {
    console.log(`Your Server is open at http://localhost:${port}`);
});

// Opening the Server
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "iPhone",
});

// Opening the connection with the DataBase Server
con.connect((err) => {
    if (err) console.log(err);
    else console.log(`MySQL Server is Connected!`);

    /*Create a database named "apple_2023":*/
    con.query("CREATE DATABASE if not exists iPhone", (err, result) => {
        if (err) console.log(err);
        console.log("Database created");
    });
});

//Creating Tables with the Necessary Parts
app.get("/iPhoneTable", (req, res) => {
    let createProducts = `CREATE TABLE if not exists Products(
    Product_id int auto_increment,
    Product_url varchar(255) not null,
    Product_name varchar(255) not null,
    PRIMARY KEY (Product_id)
  )`;
    let createProductDescription = `CREATE TABLE if not exists Product_Description(
    Description_id int auto_increment,
    Product_id int(11) not null,
    Product_brief_description TEXT not null,
    Product_description TEXT not null,
    Product_img varchar(255) not null,
    Product_link varchar(255) not null,
    PRIMARY KEY (Description_id),
    FOREIGN KEY (Product_id) REFERENCES Products(Product_id)
  )`;
    let createProductPrice = `CREATE TABLE if not exists Product_Price(
    Price_id int auto_increment,
    Product_id int(11) not null,    
    Starting_price varchar(255) not null,
    Price_range varchar(255) not null,
    PRIMARY KEY (Price_id),
    FOREIGN KEY (Product_id) REFERENCES Products(Product_id)
  )`;

    con.query(createProducts, (err, rows, fields) => {
        if (err) console.log(err);
    });
    con.query(createProductDescription, (err, rows, fields) => {
        if (err) console.log(err);
    });
    con.query(createProductPrice, (err, rows, fields) => {
        if (err) console.log(err);
    });

    console.log(`Three Tables Created`);
    res.end(`Three Tables Created`);
});

// Creating a post to Insert the data(New iPhone)
app.post("/addiPhone", (req, res) => {
    let ID = req.body.iPhoneID;
    let img = req.body.imgPath;
    let Url = req.body.iPhoneLink;
    let Title = req.body.iPhoneTitle;
    let StartPrice = req.body.StartPrice;
    let PriceRange = req.body.PriceRange;
    let BriefDescription = req.body.BriefDescription;
    let FullDescription = req.body.FullDescription;

    //Insert a record in the "Products" table:
    let sqlAddToProducts = `INSERT INTO Products (Product_url, Product_name) VALUES ('${ID}', '${Title}')`;

    con.query(sqlAddToProducts, (error, rows, fields) => {
        if (error) throw error;
        console.log("New Products inserted");
    });

    //Insert a record in all Other table:
    let idListOfProduct = `SELECT * FROM Products WHERE Product_url = '${ID}'`;

    con.query(idListOfProduct, (error, rows, fields) => {
        if (error) throw error;

        let addedProductId = 0;

        addedProductId = rows[0].Product_id;

        if (addedProductId != 0) {
            let sqlAddToProductDescription = `INSERT INTO Product_Description (Product_id, Product_brief_description, Product_description, Product_img, Product_link) VALUES ('${addedProductId}', '${BriefDescription}', '${FullDescription}', '${img}', '${Url}' )`;

            con.query(sqlAddToProductDescription, (err, result) => {
                if (err) console.log(err);
                console.log("Product Description inserted");
            });

            let sqlAddToProductPrice = `INSERT INTO Product_Price (Product_id, Starting_price, Price_range) VALUES ('${addedProductId}', '${StartPrice}', '${PriceRange}')`;

            con.query(sqlAddToProductPrice, (err, result) => {
                if (err) throw err;
                console.log("Product Price inserted");
            });
        }
    });

    res.end(`New iPhone Product added`);
});

// Getting iPhone Data or Sending iPhone Data to Frontend Web Page
app.get("/iPhone", (req, res) => {
    let getIPhone = `SELECT * FROM Products JOIN Product_Description JOIN Product_Price ON Products.Product_id = Product_Description.Product_id AND Products.Product_id = Product_Price.Product_id`;

    con.query(getIPhone, (err, rows, fields) => {
        let iPhoneJson = { iPhoneProducts: [] };
        iPhoneJson.iPhoneProducts = rows;
        let iPhoneString = JSON.stringify(iPhoneJson);

        if (err) throw err;
        else res.end(iPhoneString);
    });
});