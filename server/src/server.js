import express from "express"
import billRoutes from "./routes/billRoutes.js"
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import cors from "cors"

dotenv.config();
connectDB();

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

app.use("/api/bills", billRoutes)

app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT)
})