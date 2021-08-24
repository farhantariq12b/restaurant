
const express = require('express')
const mongoose = require('mongoose');

import restaurantRoutes from './restaurant'
import productRoutes from './product'

const app = express()


app.use(express.urlencoded());
app.use(express.json());
app.use('/api/', restaurantRoutes)
app.use('/api/', productRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.chpr2.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    console.log('Database Connected')
  )
  .catch((error: any) => {
    throw error
  })

export default app