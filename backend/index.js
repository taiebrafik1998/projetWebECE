import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'

//routes
const app = express();


//Middleware
app.use(bodyParser.json({limit: '30mb',extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb',extended: true}))
dotenv.config()
mongoose.connect(process.env.MONGO_DB,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
then(()=>app.listen(process.env.PORT,console.log(`<INFO> listning at ${5000} ...`)))
.catch((error)=>console.log(error))


//routage 
app.use('/auth', AuthRoute)
app.use('/user', UserRoute)