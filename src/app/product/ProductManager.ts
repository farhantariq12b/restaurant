import { deleteProduct, createProduct, findAllProducts, findById, updateProduct } from '../../handler/ProductHandler'

async function getAllProducts (id: any) {

  const data = await findAllProducts(id)
  return data

}

async function findProduct (id: string) {
  const data = await findById(id)
  return data
}

async function registerProduct (requestBody: any, requestFile: any) {

  let productBody = requestBody
  if (requestFile) {
    productBody = {
      ...productBody,
      photo: requestFile.buffer
    }
  }

  const data = await createProduct(productBody)
  return data
}

async function removeProduct (id: string) {

  const data = await deleteProduct(id)
  return data

}

async function changeProduct (id: string, requestBody: any, requestFile: any) {


  let prodcutBody = requestBody

  if (requestFile) {
    prodcutBody = {
      ...prodcutBody,
      photo: requestFile.buffer
    }
  }

  const product = await findProduct(id)

  const updatedBody = Object.assign(product, prodcutBody)

  const data = await updateProduct(id, updatedBody)
  return data

}

export {
  getAllProducts,
  findProduct,
  registerProduct,
  removeProduct,
  changeProduct
}