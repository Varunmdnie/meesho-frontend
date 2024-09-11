let express = require('express')
let dotenv = require('dotenv')
let userRoutes = require('./routes/userRoutes')
let productRoutes = require('./routes/productRoutes')
let cors = require('cors')
let connectDB = require('./config/database')
let app = express()

dotenv.config()
let PORT = process.env.PORT || 5000
connectDB()
app.use(express.json())
app.use(cors())

app.use('/api/users',userRoutes)
app.use('/api/products',productRoutes)



app.listen(PORT,() => console.log(`running on ${PORT} port`))
