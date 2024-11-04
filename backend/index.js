import express from 'express';
import{PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose' ;
import {Country } from './models/countryModel.js';
import countryRoute from './routes/countryRoute.js'
import cors from 'cors' ;

const app = express(); //new variable for express

//Middleware for parsing request body
app.use(express.json());


//Middleware for handling CORS POLICY
app.use(cors());
/**app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET','POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);*/

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN Stack Tutorial')
});

app.use('/countries', countryRoute);


mongoose
    .connect(mongoDBURL)
    .then (() => {
        console.log('App connnected to database')
        app.listen(PORT, () => {
            console.log(`APP is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });