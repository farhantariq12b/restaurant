const express = require('express')

import { addProduct, deleteProduct, getByID, getProductByRestaurantId, updateProduct } from "../../controllers/products"

const router = express.Router()

router.get("/products/:id", getProductByRestaurantId)
router.post("/add-product", addProduct)
router.get("/product/:id", getByID)
router.put("/product/:id", updateProduct)
router.delete("/product/:id", deleteProduct)

export default router