// server/models/Product.js
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  basePrice: Number,
  features: [String],
});

export const Product = mongoose.model('Product', ProductSchema);

