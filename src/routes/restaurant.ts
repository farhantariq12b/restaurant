import { addRestaurant, deleteRestaurant, getByID, getRestaurants, updateRestaurant } from "../app/restaurant/RestaurantController"

const express = require('express')
const multer  = require('multer')
const upload = multer()
const router = express.Router()

router.get("/restaurant", getRestaurants)
router.post("/restaurant", upload.single('picture'), addRestaurant)
router.get("/restaurant/:id", getByID)
router.put("/restaurant/:id", upload.single('picture'), updateRestaurant)
router.delete("/restaurant/:id", deleteRestaurant)

export default router