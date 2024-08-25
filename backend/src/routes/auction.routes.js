import { beginAuction,bidFunction } from "../controllers/auction.controllers.js";
import { Router } from "express";
const router = Router();

router.route("/").post(beginAuction);
router.route("/:id/start").post(bidFunction);

export default router;