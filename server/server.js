import express from "express"
import billRoutes from "./routes/billRoutes.js"

const app = express()

app.use("/api/bills", billRoutes)


app.listen(5001, () => {
    console.log("Server started on PORT: 5001")
})