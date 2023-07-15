require('dotenv').config()
const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000;

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.json())
app.use(errorHandler)

app.use('/', require('./routes/articleRoutes'))


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
}).catch(error => {
  console.log(error);
})





