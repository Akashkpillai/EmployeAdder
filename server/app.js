const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./config/connect')
const cors = require('cors')
const cookiParser = require('cookie-parser')
const bodyParser = require('body-parser');
const userRouter = require('./Routes/userRouter')


app.use(cors())

//Router
app.get('/',(req,res)=>{
    res.json({msg:"Hello World"});
})

//MiddleWare
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookiParser())


app.use('/user',userRouter)

//Database
const connectServer = async() =>{
    try {
        await connectDB();
        const PORT = process.env.PORT || 3500
        app.listen(PORT,()=>{
            console.log(`The Server is running on port ${PORT}`);
        }) 
    } catch (error) {
        console.log(error);
    }
}


connectServer();