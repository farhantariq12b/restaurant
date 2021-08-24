import { deleteRestaurant, createRestaurant, findAllRestaurants, findById, updateRestaurant } from '../../handler/RestaurantHandler'

async function getAllRestaurants () {

  const data = await findAllRestaurants()
  return data

}

async function findRestaurant (id: string) {
  const data = await findById(id)
  return data
}

async function registerRestaurant (requestBody: any) {
  const data = await createRestaurant(requestBody)
  return data
}

async function removeRestaurant (id: string) {

  const data = await deleteRestaurant(id)
  return data

}

async function changeRestaurant (id: string, requestBody: any) {

  const data = await updateRestaurant(id, requestBody)
  return data

}

export {
  getAllRestaurants,
  findRestaurant,
  registerRestaurant,
  removeRestaurant,
  changeRestaurant
}