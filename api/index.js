import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/conn.js'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'

dotenv.config()
const PORT = process.env.PORT || 8000
const mode = process.env.NODE_ENV

const app = express()

//middlewares
app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', roomsRoute)
app.use('/api/rooms', hotelsRoute)

app.listen(8000, () => {
  connectDB()
  console.log('Server is running on port 8000')
})