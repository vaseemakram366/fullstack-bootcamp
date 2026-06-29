import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        discountPrice: {
            type: Number,
            default: 0,
        },

        brand: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        stock: {
            type: Number,
            required: true,
            default: 0,
        },

        images: [
            {
                type: String,
            },
        ],

        rating: {
            type: Number,
            default: 0,
        },

        numReviews: {
            type: Number,
            default: 0,
        },

        isFeatured: {
            type: Boolean,
            default: false,
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

export default Product;