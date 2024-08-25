import express from "express";
const router = express.Router();
import {Product} from "../models/product.models.js"
import { Auction } from "../models/auction.models.js";
const productFunc = async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
const beginAuction =  async (req, res) => {
    const { buyer, selectedVendors, productRange, budget, requirements } = req.body;
    const auction = new Auction({
      buyer,
      selectedVendors,
      productRange,
      budget,
      requirements,
      status: 'pending',
    });
  
    try {
      const newAuction = await auction.save();
      res.status(201).json(newAuction);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

const bidFunction = async(req,res) =>{
    try {
        const auction = await Auction.findById(req.params.id);
        if (!auction) {
          return res.status(404).json({ message: 'Auction not found' });
        }
    
        // Simulate vendor responses
        const bids = auction.selectedVendors.map(vendor => {
          const basePrice = auction.budget;
          const discountFactor = 0.7 + Math.random() * 0.2; // Random discount between 10-30%
          return {
            vendor,
            price: basePrice * discountFactor,
            details: `Best offer from ${vendor}`
          };
        });
        bids.sort((a, b) => a.price - b.price);

    auction.bids = bids;
    auction.status = 'completed';
    await auction.save();

    res.json(auction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export {productFunc,beginAuction,bidFunction} ;