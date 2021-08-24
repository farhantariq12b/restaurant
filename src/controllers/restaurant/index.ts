import { ErrorCodes, ErrorMessages } from "../../constants";
import { Exception } from "../../helpers";
import { Restaurant } from "../../models/restaurant"

const getRestaurants = (req: any, res: any) => {
  try {
    Restaurant.find().sort({ createdAt: -1 })
    .then((result: any) => {
        res.status(ErrorCodes.SUCCESS).send(result);
    })
    .catch((err: any) => {
        res.status(ErrorCodes.BAD_REQUEST).send(err);
    });
  } catch (error) {
    throw new Exception(ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG, ErrorCodes.BAD_REQUEST, { reportError: true });
  }
}

const getByID = (req: any, res: any) => {
  try {
    const id = req.params.id;

    Restaurant.findById(id)
      .then((result: any) => {
          res.status(ErrorCodes.SUCCESS).send(result);
      })
      .catch((err: any) => {
          res.status(ErrorCodes.BAD_REQUEST).send(err);
      });  

  } catch (err) {
    throw new Exception(ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG, ErrorCodes.BAD_REQUEST, { reportError: true });
  }
}


const addRestaurant = (req: any, res: any) => {
  try {

    let restaurantBody = req.body
    if (req.file) {
      restaurantBody = {
        ...restaurantBody,
        picture: req.file.buffer.toString()
      }
    }

    const restaurant = new Restaurant(restaurantBody);
    restaurant.save()
      .then((result: any) => {
          res.status(ErrorCodes.SUCCESS).send(result);
      })
      .catch((err: any) => {
        res.status(ErrorCodes.BAD_REQUEST).send(err);
      });  
  } catch (error) {
    throw new Exception(ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG, ErrorCodes.BAD_REQUEST, { reportError: true });
  }
}

const deleteRestaurant = (req: any, res: any) => {
  try {
    const id = req.params.id;
    Restaurant.findByIdAndDelete(id)
        .then((result: any) => {
            res.status(ErrorCodes.SUCCESS).send(result);
        })
        .catch((err: any) => {
            res.status(ErrorCodes.BAD_REQUEST).send(err);
        });
  
  } catch (error) {
    throw new Exception(ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG, ErrorCodes.BAD_REQUEST, { reportError: true });
  }
}

const updateRestaurant = (req: any, res: any) => {
  try {
  const id = req.params.id;
  Restaurant.findOne(id)
      .then((result: any) => {
          res.status(ErrorCodes.SUCCESS).send(result);
      })
      .catch((err: any) => {
          res.status(ErrorCodes.BAD_REQUEST).send(err);
      });
  } catch (error) {
    throw new Exception(ErrorMessages.MESSAGES.SOMETHING_WENT_WRONG, ErrorCodes.BAD_REQUEST, { reportError: true });
  }
}
export { getRestaurants, addRestaurant, getByID, deleteRestaurant, updateRestaurant }
