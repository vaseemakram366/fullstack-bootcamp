import express from "express";

import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Get All Products
router.get("/", getProducts);

// Get Single Product
router.get("/:id", getProductById);

// Create Product
router.post("/", createProduct);

// Update Product
router.put("/:id", updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

export default router;