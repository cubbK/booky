const mongoose = require("mongoose");
import { config } from "./config";

function connectToDb() {
  mongoose.connect(
    "mongodb://" + config.DB,
    {
      useNewUrlParser: true,
      user: "root",
      pass: "root",
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
mongoose.connection.on("error", function(err: any) {
  console.log("Mongoose connection error: " + err);
  mongoose.connection.close();
});

mongoose.connection.on("disconnected", function(err: any) {
  console.log("Reconnecting...");
  setTimeout(connectToDb, 3000);
});

// When the connection is disconnected
// mongoose.connection.on("disconnected", function(err) {
//   throw "Database disconnected";
// });

connectToDb();

module.exports = mongoose;
