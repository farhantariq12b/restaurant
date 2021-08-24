import { addProduct, deleteProduct, getByID, getProductByRestaurantId, updateProduct } from "../../controllers/products"

const express = require('express')
const multer  = require('multer')
const upload = multer()
const router = express.Router()

router.get("/products/:id", getProductByRestaurantId)
router.post("/add-product", upload.single('photo'), addProduct)
router.get("/product/:id", getByID)
router.put("/product/:id", upload.single('photo'), updateProduct)
router.delete("/product/:id", deleteProduct)

export default router