import {Product} from "../models/product.models.js";

const listProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  const getAllCategory = async (req, res) => {
    try {
      const categories = await Product.distinct('category');
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  const getProductByCategory = async (req, res) => {
    try {
    const { category } = req.query;
    let query = {};
    if (category) {
      query.category = category;
    }

    console.log("Query:", query);  // Log the query object
    const products = await Product.find(query).select('-_id name category description basePrice vendor features');
    console.log("Products found:", products);  // Log the found products

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  }

  export {listProduct,getAllCategory,getProductByCategory};