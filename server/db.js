const mongoose = require("mongoose");

function connectToDb() {
  mongoose.connect(
    "mongodb://" + process.env.DB,
    {
      useNewUrlParser: true,
      
      auth: {
        authdb: "admin"
      }
    }
  );
}

mongoose.connection.on("connected", function() {
  console.log("Database connection established");
});

// If the connection throws an error
mongoose.connection.on("error", function(err) {
  console.log("Mongoose connection error: " + err);
  mongoose.connection.close();
});

mongoose.connection.on("disconnected", function(err) {
  console.log("Reconnecting...");
  setTimeout(connectToDb, 3000);
});

// When the connection is disconnected
// mongoose.connection.on("disconnected", function(err) {
//   throw "Database disconnected";
// });

connectToDb();

module.exports = mongoose;
