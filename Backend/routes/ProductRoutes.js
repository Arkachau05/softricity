import express from 'express';
import Product from '../Models/Product.js';

const router = express.Router();

router.get("/",async (req, res) => { // all products
    const products = await Product.find();
    res.json(products);
})

router.post("/", async (req, res) => { // create product
    const  product=new Product(req.body);
    await product.save();
    res.status(201).json(product);
    })

    router.post("/:id/review", async (req, res) => { // add review
    const { user,rating,comments} = req.body;
    const product = await Product.findById(req.params.id);
    product.reviews.push({ user, rating, comment: comments });
    await product.save();
    res.json(product);
})
router.post("/:id/feedback", async (req, res) => { // add feedback
    const { feedback } = req.body;
    const product = await Product.findById(req.params.id);
    product.feedback = feedback;
    await product.save();
    res.json(product);
})

export default router;
