const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },


});
const Product = mongoose.model("product", ProductSchema);
module.exports = Product;