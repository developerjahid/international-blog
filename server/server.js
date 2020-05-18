const express = require('express')
const router = express.Router()
const moongoose = require('mongoose')

//start express
const app = express()

//dotenv config
require('dotenv').config()

//connect database
const connectDB = async () => {
    try {
        await moongoose.connect(process.env.mongoDBUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log('mongoDB connected.')
    } catch (err) {
        console.log(err.message)
        //exit process with failure
        process.exit(1)
    }
}

connectDB()

//init middleware
app.use(express.json({ extended: true }))

//define routes
app.use('/auth', require('./routes/authRoute'))

//server on root
app.get('/', (req, res) => res.send("hello I'm express server!"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
