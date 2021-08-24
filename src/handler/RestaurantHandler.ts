import { Validator } from "../helpers";
import { Restaurant } from "../models/restaurant";

async function findAllRestaurants () {

  const data = await Restaurant.find().sort({ createdAt: -1 })
  return data

}

async function findById (id: string) {

  const data = await Restaurant.findOne({ _id: Validator.isValidId(id) }).lean().exec()
  return data

}

async function createRestaurant (requestBody: any) {

  const restaurant = new Restaurant(requestBody);
  const data = await restaurant.save()

  return data
}

async function deleteRestaurant (id: string) {

  const data = await Restaurant.findByIdAndDelete({ _id: Validator.isValidId(id)}).exec()
  return data

}


async function updateRestaurant (id: string, requestBody: any) {


  const data = await Restaurant.findOneAndUpdate({ _id: Validator.isValidId(id) }, requestBody, { new: true})
  return data

}


export {
  findAllRestaurants,
  updateRestaurant,
  deleteRestaurant,
  findById,
  createRestaurant
}