import { Router } from "express";
import { listProduct,getAllCategory,getProductByCategory } from "../controllers/product.controllers.js";
const router = Router();

router.route("/").post(listProduct);
router.route("/").get(getAllCategory);
router.route("/categories").get(getProductByCategory);

export default router;