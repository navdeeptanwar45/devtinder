const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://navdeeptanwarpg21:F5DGeGGaIPO048sg@cluster0.2q1pl.mongodb.net/myDatabase?retryWrites=true&w=majority");
};

module.exports = connectDB;
