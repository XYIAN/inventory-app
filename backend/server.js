const express = require( 'express' ); 
const dotenv = require( 'dotenv' ); 
const cors = require( 'cors' ); 
const connectDS = require( './config/db' );
const productRouter = require( './routes/productRoutes' );

dotenv.config();//load env variables

const app = express(); 
connectDB();//connect to database

app.use( cors() );//enable cors
app.use( express.json() );//parse json

app.use( '/api/products', productRouter );//use product router

const PORT = process.env.PORT || 5000;
app.listen( PORT, console.log( `Server running in ${ process.env.NODE_ENV } mode on port ${ PORT }` ) );