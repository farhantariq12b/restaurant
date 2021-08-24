import { ErrorCodes, ErrorMessages } from "../../constants";
import { Validator } from "../../helpers";
import { Request, Response } from 'express';
import { getAllProducts, findProduct, registerProduct, removeProduct, changeProduct } from "./ProductManager";

const getProductByRestaurantId = async (req: Request, res: Response) => {

  try {

    const data = await getAllProducts(req.params.id)

    return res.json({
      status: ErrorCodes.SUCCESS,
      success: true,
      data
    });

  } catch (err: any) {

    console.log(`getProductByRestaurantId:: Request to get Product failed. params:: ${JSON.stringify(req.params)} body:: `, req.body, err);

    return res.status(err.code || ErrorCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.reportError ? err.message : ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG
    });
  }
}

const getByID = async (req: Request, res: Response) => {

  try {

    const id = req.params.id;

    const data = await findProduct(req.params.id)

    return res.json({
      status: ErrorCodes.SUCCESS,
      success: true,
      data
    });
    
  } catch (err: any) {

    console.log(`getByID:: Request to get Product failed. params:: ${JSON.stringify(req.params)} body:: `, req.body, err);

    return res.status(err.code || ErrorCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.reportError ? err.message : ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG
    });

  }
}


const addProduct = async (req: any, res: any) => {

  try {
    
    const data = await registerProduct(req.body, req.file)
    
    return res.json({
      status: ErrorCodes.SUCCESS,
      success: true,
      data
    });

  } catch (err: any) {

    console.log(`addProduct:: Request to create Product failed. params:: ${JSON.stringify(req.params)} body:: `, req.body, err);

    return res.status(err.code || ErrorCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.reportError ? err.message : ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG
    });

  }
}

const deleteProduct = async (req: Request, res: Response) => {

  try {

    await removeProduct(req.params.id)

    return res.json({
      status: ErrorCodes.SUCCESS,
      success: true
    });

  } catch (err: any) {

    console.log(`deleteProduct:: Request to delete Product failed. params:: ${JSON.stringify(req.params)} body:: `, req.body, err);

    return res.status(err.code || ErrorCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.reportError ? err.message : ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG
    });

  }
}


const updateProduct = async (req: any, res: any) => {

  try {

    const data = await changeProduct(req.params.id, req.body, req.file)    

    return res.json({
      status: ErrorCodes.SUCCESS,
      success: true,
      data
    });
  
  } catch (err: any) {

    console.log(`updateProduct:: Request to update Restaurant failed. params:: ${JSON.stringify(req.params)} body:: `, req.body, err);

    return res.status(err.code || ErrorCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.reportError ? err.message : ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG
    });
  }
}

export { getProductByRestaurantId, addProduct, getByID, deleteProduct, updateProduct }
