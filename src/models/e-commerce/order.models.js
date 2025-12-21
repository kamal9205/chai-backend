import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    OrderItems: {
        type:[orderItemSchema],
    },
    address: {
        type:String,
        required: true,
    },
    status: {
        type: String,
        enum: ["PENDING","CANCELLED","DELIVERED"],
        default: "PENDING",
    }
},{timestamps:true});

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true,
    }
})

export const Order = mongoose.model("Order",orderSchema);