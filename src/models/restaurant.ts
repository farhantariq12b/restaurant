const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    picture: {
      type: Object,
      required: false,
    },

    address: {
      type: String,
      required: true,
    },

    openingHours: {
      type: Object,
      required: true,
    },

  },
  { timestamps: true, versionKey: false }
)

export const Restaurant = mongoose.model('Restaurant', restaurantSchema);
