const express = require('express')

import { addRestaurant, deleteRestaurant, getByID, getRestaurants, updateRestaurant } from "../../controllers/products"

const router = express.Router()

router.get("/products", getRestaurants)
router.post("/add-product", addRestaurant)
router.get("/product/:id", getByID)
router.put("/product/:id", updateRestaurant)
router.delete("/product/:id", deleteRestaurant)

export default router