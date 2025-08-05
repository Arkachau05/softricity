// models/Product.js
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    user:String,
    rating:Number,
    comment:String,
})

const productSchema = new mongoose.Schema({
name: String,
category: String,
price: Number,
description: String,
reviews: [reviewSchema],
feedback: String,
});

const Product = mongoose.model('Product', productSchema);
export default Product;
