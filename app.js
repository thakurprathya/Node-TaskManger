const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./database/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();

// middleware
app.use(express.static('./public'));  //serving static files (frontend)
app.use(express.json());  //if we donot use it we won't have data in req.body

//routes & middlewares
app.use('/api/v1/tasks', tasks);  //base url for our router requests
app.use(notFound);
app.use(errorHandlerMiddleware);

//setting up port for server
const port = process.env.PORT || 3000;

//connecting to DataBase
const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI);  //asynchronously calling funct
        app.listen(port, console.log(`Server listening at port ${port} ...`));
    }catch(error){
        console.log(error);
    }
}
start();
