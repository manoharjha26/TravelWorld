import  express  from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from 'cookie-parser'


import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/booking.js';



dotenv.config();
const app= express()
const port = process.env.PORt || 4000;
const corsOptions ={
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}


// database connection

const mongoURI ='mongodb+srv://abhinavtiwary85:Abhinav@cluster0.ke2tocq.mongodb.net/?retryWrites=true&w=majority';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(mongoURI, options)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Your code for working with the database goes here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });




//middleware
app.use (express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/review',reviewRoute);
app.use('/api/v1/booking',bookingRoute);



app.listen (port,()=>{
  
    console.log('server listenning on port ', port);

})
