import { Router } from "express"
import { addRestaurant, deleteRestaurant, getByID, getRestaurants, updateRestaurant } from "../../controllers/restaurant"
const multer  = require('multer')
const upload = multer()

const router: Router = Router()

router.get("/restaurants", getRestaurants)
router.post("/add-restaurant", upload.single('picture'), addRestaurant)
router.get("/restaurant/:id", getByID)
router.put("/restaurant/:id", updateRestaurant)
router.delete("/restaurant/:id", deleteRestaurant)

export default router