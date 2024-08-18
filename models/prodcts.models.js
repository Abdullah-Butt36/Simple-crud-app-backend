const mongoose = require("mongoose");

//  Mongoose schema defines the 
// document's properties, default values, types of data, validators, etc.
const productScheme = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
  },

  quantity: {
    type: Number,
    required: true,
    default: 0,
  },

  price: {
    type: Number,
    required: true,
    default: 0,
  },

  image: {
    type: String,
    required: false,
  },
},
  {
    timestamps : true
  }
);

// A Mongoose model is a wrapper of the Mongoose schema.Mongoose model provides an 
// interface for the database to create, query, update, delete records, and so on.

const product = mongoose.model("product" , productScheme);

module.exports = product;
