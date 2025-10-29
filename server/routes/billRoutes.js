import express from "express"

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("You just fetched the bills")
})

router.post("/", (req, res) => {
    res.status(201).json({message: "Bill created successfully"})
})

router.put("/:id", (req, res) => {
    res.status(200).json({message: "Bill updated successfully"})
})

router.delete("/:id", (req, res) => {
    res.status(200).json({message: "Bill deleted successfully"})
})

export default router;