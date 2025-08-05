import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import ProductRoutes from './routes/ProductRoutes.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI).then(() => 
    console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

app.use('/api/products', ProductRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
