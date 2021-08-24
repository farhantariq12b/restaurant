import { addRestaurant, deleteRestaurant, getByID, getRestaurants, updateRestaurant } from "../../controllers/restaurant"

const express = require('express')
const multer  = require('multer')
const upload = multer()
const router = express.Router()

router.get("/restaurants", getRestaurants)
router.post("/add-restaurant", upload.single('picture'), addRestaurant)
router.get("/restaurant/:id", getByID)
router.put("/restaurant/:id", upload.single('picture'), updateRestaurant)
router.delete("/restaurant/:id", deleteRestaurant)

export default router