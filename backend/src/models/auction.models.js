// server/models/Auction.js
import mongoose from "mongoose";

const AuctionSchema = new mongoose.Schema({
  buyer: String,
  selectedVendors: [String],
  productRange: String,
  budget: Number,
  requirements: String,
  status: String,
  bids: [{
    vendor: String,
    price: Number,
    details: String
  }],
});

export const Auction = mongoose.model('Auction', AuctionSchema);