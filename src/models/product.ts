
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    photo: {
      type: Object,
      required: false,
    },

    category: {
      type: Array,
      required: true,
    },

    restaurant_id: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
)

export const Product = mongoose.model('Product', productSchema);
