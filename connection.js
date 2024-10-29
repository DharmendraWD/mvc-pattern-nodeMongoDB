const mongoose = require('mongoose')


function connectMongoDB(url) {
    mongoose.connect(url)
    .then(() => {
        console.log('database connected')   
    })       
    
}

module.exports = {
    connectMongoDB
}