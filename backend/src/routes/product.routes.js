import { Router } from "express";
import { listProduct,getAllCategory,getProductByCategory } from "../controllers/product.controllers.js";
const router = Router();

router.route("/").post(listProduct);
router.route("/").get(getProductByCategory);
router.route("/categories").get(getAllCategory);

export default router;