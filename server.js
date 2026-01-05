const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./dbConnection.js");
const dotenv = require("dotenv").config();

connectDb()
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json())  // This middleware help us to get the JSON Data from client.
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/userRoutes"))

app.use(errorHandler)

app.listen(port, ()=>{
  console.log( `server is running on port ${port}`)
})