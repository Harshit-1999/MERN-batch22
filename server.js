const databaseConnectivity = require("./configuration/databaseConnectivity.js")
const express = require("express");


//dotenv kuch return nhi deta use for file variable read krne k liye krte hai
require("dotenv").config();

const Routes = require("./routes/UserRoutes.js");


// connect krne k liye,  object ka create krne k liye aur server start krnen ko
const app = express();

//dono me se ek server ko run krne k liye 
const Port = process.env.PORT || 4000;

// server sstart krna hai, ek method hai, kon se port me URL me start knre hai

app.listen(Port, () => {
    console.log("Jay Hind server is running at PORT ", Port);
})

app.use(express.json())
databaseConnectivity();

//demo path request, method hai object se cll ho rhaa call back function with para req res

app.get("/", (request, responce) => {
    responce.send("Home page")
})
//Configuratin file to data base connect

app.use("/api/v1", Routes);