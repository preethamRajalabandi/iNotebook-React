const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/inotebook";

const connectoMongo = () => {
    mongoose.connect(mongoURI).then(
        (data) => {
            console.log(`Connected to Mongo Successfully `);
        }
    ).catch(
        (err) => {
            console.log(err);

        }
    )
}

module.exports = connectoMongo;