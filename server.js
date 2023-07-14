require('dotenv').config()
const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000;

connectDB()

const app = express()

app.set('view engine', 'ejs')


app.use(express.json())

app.use('/', require('./routes/articleRoutes'))

app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})



