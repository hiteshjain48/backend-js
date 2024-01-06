const mongoose = require('mongoose');

async function connectMongoDb(url) {
    return await mongoose.connect(url)
    .then(()=>{console.log("Mongodb started")})
    .catch((err) => console.log("Error while connecting", err));
}

module.exports = {
    connectMongoDb,
}
