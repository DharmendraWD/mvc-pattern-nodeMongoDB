const express = require('express')
const path = require('path')
const app = express();


const users = require('./models/user')
const userRouter = require('./routes/users')
const {connectMongoDB} = require('./connection');
const {testMiddleWare} = require('./middlewares/index');




// THESE BOTH LINE USED FOR HANDLE FORM DATA ON BACKEND
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))     //static images, video can be used in project
app.set('view engine', 'ejs') //used to render ejs file as html


// connnect mongoDB
connectMongoDB('mongodb://localhost:27017/mvc');

// middlewares 
app.use(testMiddleWare())


// ROUTES  
app.use('/users', userRouter);




// start server on 3000
app.listen(3000, () => {
    console.log("server is running");
})

