const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDB =()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Mech-test')
    .then(()=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err)
    })
}

    
module.exports = connectDB;