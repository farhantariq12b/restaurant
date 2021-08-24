import { addProduct, deleteProduct, getByID, getProductByRestaurantId, updateProduct } from '../app/product/ProductController'

const express = require('express')
const multer  = require('multer')
const upload = multer()
const router = express.Router()

router.get("/restaurant/:id/products", getProductByRestaurantId)
router.post("/product", upload.single('photo'), addProduct)
router.get("/product/:id", getByID)
router.put("/product/:id", upload.single('photo'), updateProduct)
router.delete("/product/:id", deleteProduct)

export default router