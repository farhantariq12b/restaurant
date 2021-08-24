import { ErrorCodes } from "../../constants";
import { Restaurant } from "../../models/restaurant"

const getRestaurants = (req: any, res: any) => {
  try {
    Restaurant.find().sort({ createdAt: -1 })
    .then((result: any) => {
        res.status(ErrorCodes.SUCCESS).send(result);
    })
    .catch((err: any) => {
        res.status(ErrorCodes.BAD_REQUEST).send(`There is an error in the server while loading projects`);
    });
  } catch (error) {
    throw error
  }
}

const getByID = (req: any, res: any) => {
  const id = req.params.id;

  Restaurant.findById(id)
      .then((result: any) => {
          res.status(ErrorCodes.SUCCESS).send(result);
      })
      .catch((err: any) => {
          res.status(ErrorCodes.BAD_REQUEST).send(err);
      });
}


const addRestaurant = (req: any, res: any) => {
  try {
    const restaurant = new Restaurant(req.body);
    restaurant.save()
        .then((result: any) => {
            res.status(ErrorCodes.SUCCESS).send(result);
        })
        .catch((err: any) => {
            res.status(ErrorCodes.BAD_REQUEST).send(err);
        });
  } catch (error) {
    throw error
  }
}

const deleteRestaurant = (req: any, res: any) => {
  const id = req.params.id;
  Restaurant.findByIdAndDelete(id)
      .then((result: any) => {
          res.status(ErrorCodes.SUCCESS).send(result);
      })
      .catch((err: any) => {
          res.status(ErrorCodes.BAD_REQUEST).send(err);
      });

}

const updateRestaurant = (req: any, res: any) => {
  const id = req.params.id;
  Restaurant.findOne(id)
      .then((result: any) => {
          res.status(ErrorCodes.SUCCESS).send(result);
      })
      .catch((err: any) => {
          res.status(ErrorCodes.BAD_REQUEST).send(err);
      });

}
export { getRestaurants, addRestaurant, getByID, deleteRestaurant, updateRestaurant }
