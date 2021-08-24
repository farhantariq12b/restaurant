const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser')

import restaurantRoutes from './routes/restaurant'
import productRoutes from './routes/product'

const app = express()

const PORT: string | number = process.env.PORT || 4000

app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(restaurantRoutes)
app.use(productRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.chpr2.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error: any) => {
    throw error
  })