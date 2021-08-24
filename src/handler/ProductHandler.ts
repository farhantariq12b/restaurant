import { Validator } from "../helpers";
import { Product } from "../models/product";

async function findAllProducts (id: any) {

  const data = await Product.find({ restaurant_id: id}).sort({ createdAt: -1 })
  return data

}

async function findById (id: string) {

  const data = await Product.findOne({ _id: Validator.isValidId(id) }).lean().exec()
  return data

}

async function createProduct (requestBody: any) {

  const restaurant = new Product(requestBody);
  const data = await restaurant.save()

  return data
}

async function deleteProduct (id: string) {

  const data = await Product.findByIdAndDelete({ _id: Validator.isValidId(id)}).exec()
  return data

}


async function updateProduct (id: string, requestBody: any) {


  const data = await Product.findOneAndUpdate({ _id: Validator.isValidId(id) }, requestBody, { new: true})
  return data

}


export {

  findAllProducts,
  findById,
  createProduct,
  deleteProduct,
  updateProduct
  
}