import mongoose from 'mongoose';

export default class Validator {

  static isValidId (str) {

    try {

      const nid = new mongoose.Types.ObjectId(str);

      return (nid.toString() === str.toString() ? nid : null);

    } catch (e) {

      return null;

    }

  }
}
