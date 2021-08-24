import { deleteRestaurant, createRestaurant, findAllRestaurants, findById, updateRestaurant } from '../../handler/RestaurantHandler'

async function getAllRestaurants () {

  const data = await findAllRestaurants()
  return data

}

async function findRestaurant (id: string) {
  const data = await findById(id)
  return data
}

async function registerRestaurant (requestBody: any, requestFile: any) {
  let restaurantBody = requestBody

  if (requestFile) {
    restaurantBody = {
      ...restaurantBody,
      picture: requestFile.buffer
    }
  }

  const data = await createRestaurant(restaurantBody)
  return data
}

async function removeRestaurant (id: string) {

  const data = await deleteRestaurant(id)
  return data

}

async function changeRestaurant (id: string, requestBody: any, requestFile: any) {

  let restaurantBody = requestBody

  if (requestFile) {
    restaurantBody = {
      ...restaurantBody,
      picture: requestFile.buffer
    }
  }

  const restaurant = await findById(id)

  const updatedBody = Object.assign(restaurant, restaurantBody) 

  const data = await updateRestaurant(id, updatedBody)
  return data

}

export {
  getAllRestaurants,
  findRestaurant,
  registerRestaurant,
  removeRestaurant,
  changeRestaurant
}