import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/conn.js'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config()
const PORT = process.env.PORT || 8000
const mode = process.env.NODE_ENV

const app = express()

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', roomsRoute)
app.use('/api/rooms', hotelsRoute)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong"
  return res.status(errorStatus).json({
    success: false,
    message: errorMessage,
    status: errorStatus,
    stack: err.stack

  })
})

app.listen(8000, () => {
  connectDB()
  console.log('Server is running on port 8000')
})