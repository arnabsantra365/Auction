import {productFunc, beginAuction,bidFunction } from "../controllers/auction.controllers.js";
import { Router } from "express";
const router = Router();

router.route("/product").get(productFunc);
router.route("/auctions").post(beginAuction);
router.route("/auctions/:id/start").post(bidFunction);

export default router;