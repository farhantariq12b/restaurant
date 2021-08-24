import { Router } from "express"
import { addRestaurant, deleteRestaurant, getByID, getRestaurants, updateRestaurant } from "../../controllers/restaurant"

const router: Router = Router()

router.get("/restaurants", getRestaurants)
router.post("/add-restaurant", addRestaurant)
router.get("/restaurant/:id", getByID)
router.put("/restaurant/:id", updateRestaurant)
router.delete("/restaurant/:id", deleteRestaurant)

export default router