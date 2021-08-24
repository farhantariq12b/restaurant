import { Request, Response, NextFunction } from 'express';
import { validUrl } from '../helpers';
import { ErrorCodes } from "../constants";

export default class RequestValidator {

    static async validateRequest (req: Request, res: Response, next: NextFunction) {

        if (!validUrl.isUri(<string>req.headers.org)) {

            return res.status(ErrorCodes.BAD_REQUEST).json({
                success: false
            });

        }

        next();

    }

}
