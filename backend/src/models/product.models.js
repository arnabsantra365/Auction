// server/models/Product.js
import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  basePrice: { type: Number, required: true },
  vendor: { type: String, required: true },
  features: [{ type: String }],
});

export const Product = mongoose.model('Product', ProductSchema);

