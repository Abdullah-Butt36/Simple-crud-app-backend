const express = require("express");
const mongoose = require("mongoose");
const product = require("./models/prodcts.models.js");
const app = express();
const productRoute = require("./routes/product.route.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Route Middelware
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Server is working properly");
});

app.listen(5000, () => {
  console.log("Port is Listening on Server 5000");
});

mongoose
  .connect(
    "mongodb+srv://abdullahbutt1054:abdullahbutt@backenddb.63qr0.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Not connected");
  });
