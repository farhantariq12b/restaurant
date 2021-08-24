import { ErrorCodes, ErrorMessages } from "../../constants";
import { Request, Response } from 'express';
import { findById } from "../../handler/RestaurantHandler";
import { changeRestaurant, getAllRestaurants, registerRestaurant, removeRestaurant } from "./RestaurantManager";

const getRestaurants = async (req: Request, res: Response) => {

  try {

    const data = await getAllRestaurants()

    return res.json({
      status: ErrorCodes.SUCCESS,
      success: true,
      data
    });

  } catch (err: any) {

    console.log(`getRestaurants:: Request to get Restaurant failed. params:: ${JSON.stringify(req.params)} body:: `, req.body, err);

    return res.status(err.code || ErrorCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.reportError ? err.message : ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG
    });

  }
}

const getByID = async (req: Request, res: Response) => {

  try {

    const data = await findById(req.params.id)

    return res.json({
      status: ErrorCodes.SUCCESS,
      success: true,
      data
    });

  } catch (err: any) {

    console.log(`getByID:: Request to get Restaurant failed. params:: ${JSON.stringify(req.params)} body:: `, req.body, err);

    return res.status(err.code || ErrorCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.reportError ? err.message : ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG
    });

  }
}


const addRestaurant = async (req: any, res: any) => {
  try {

    const data = await registerRestaurant(req.body, req.file)

    return res.json({
      status: ErrorCodes.SUCCESS,
      success: true,
      data
    });

  } catch (err: any) {

    console.log(`addRestaurant:: Request to create Restaurant failed. params:: ${JSON.stringify(req.params)} body:: `, req.body, err);

    return res.status(err.code || ErrorCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.reportError ? err.message : ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG
    });
  }
}

const deleteRestaurant = async (req: Request, res: Response) => {

  try {

    await removeRestaurant(req.params.id)

    return res.json({
      status: ErrorCodes.SUCCESS,
      success: true
    });

  } catch (err: any) {

    console.log(`deleteRestaurant:: Request to delete Restaurant failed. params:: ${JSON.stringify(req.params)} body:: `, req.body, err);

    return res.status(err.code || ErrorCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.reportError ? err.message : ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG
    });
  }
}

const updateRestaurant = async (req: any, res: any) => {

  try {

    const data = await changeRestaurant(req.params.id, req.body, req.file)    

    return res.json({
      status: ErrorCodes.SUCCESS,
      success: true,
      data
    });
  
  } catch (err: any) {

    console.log(`deleteRestaurant:: Request to delete Restaurant failed. params:: ${JSON.stringify(req.params)} body:: `, req.body, err);

    return res.status(err.code || ErrorCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.reportError ? err.message : ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG
    });

  }
}
export { getRestaurants, addRestaurant, getByID, deleteRestaurant, updateRestaurant }
