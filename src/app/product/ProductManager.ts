import { deleteProduct, createProduct, findAllProducts, findById, updateProduct } from '../../handler/ProductHandler'

async function getAllProducts (id: any) {

  const data = await findAllProducts(id)
  return data

}

async function findProduct (id: string) {
  const data = await findById(id)
  return data
}

async function registerProduct (requestBody: any) {
  const data = await createProduct(requestBody)
  return data
}

async function removeProduct (id: string) {

  const data = await deleteProduct(id)
  return data

}

async function changeProduct (id: string, requestBody: any) {

  const data = await updateProduct(id, requestBody)
  return data

}

export {
  getAllProducts,
  findProduct,
  registerProduct,
  removeProduct,
  changeProduct
}