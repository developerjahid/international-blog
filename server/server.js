const express = require('express')
const router = express.Router()

const app = express()

//server on root
app.get('/', (req, res) => res.send("hello I'm express server!"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
