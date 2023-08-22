require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3000;

// database
mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;
db.on("err", (err) => console.log("There is an error in database."));
db.once("open", () => console.log("DB is connected 😊"));

// makeMiddleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "My secret key",
    saveUninitialized: true,
    resave: false,
  })
);
app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});
//  for static image 
app.use(express.static('uploads'));


// set template engine
app.set("view engine ", "ejs");

// routes prefix
app.use("", require("./routes/routes.js"));

app.listen(PORT, () => {
  console.log(`server is listening at port http://localhost:3000`);
});
