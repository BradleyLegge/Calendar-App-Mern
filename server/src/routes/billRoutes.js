import express from "express"
import { createBill, deleteBill, getBills, updateBill } from "../controllers/billController.js";

const router = express.Router();

router.get("/", getBills)
router.post("/", createBill)
router.put("/:id", updateBill)
router.delete("/:id", deleteBill)

export default router;