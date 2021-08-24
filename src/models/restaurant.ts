const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    picture: {
      type: String,
      required: true,
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
  { timestamps: true }
)

export const Restaurant = mongoose.model('Restaurant', restaurantSchema);
