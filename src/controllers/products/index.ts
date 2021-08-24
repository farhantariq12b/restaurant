import { ErrorCodes, ErrorMessages } from "../../constants";
import { Exception } from "../../helpers";
import { Product } from "../../models/product"

const getProducts = (req: any, res: any) => {
  try {
    Product.find({ restaurant_id: req.params.id}).sort({ createdAt: -1 })
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

    Product.findById(id)
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


const addProduct = (req: any, res: any) => {
  try {

    let productBody = req.body
    if (req.file) {
      productBody = {
        ...productBody,
        picture: req.file.buffer.toString()
      }
    }

    const product = new Product(productBody);
    product.save()
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

const deleteProduct = (req: any, res: any) => {
  try {
    const id = req.params.id;
    Product.findByIdAndDelete(id)
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

const updateProduct = (req: any, res: any) => {
  try {
  const id = req.params.id;
  Product.findOne(id)
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
export { getProducts, addProduct, getByID, deleteProduct, updateProduct }
