import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected successfully')
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB

// "mongodb+srv://bmlegge12_db_user:J1nbk3KZWMi44567@cluster0.b4lrrdd.mongodb.net/?appName=Cluster0"