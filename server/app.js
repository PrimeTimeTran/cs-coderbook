const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Mongoose connected to ${MONGODB_URI}`);
  })
  .catch((e) => {
    console.log({ e });
  });

// TODO REVIEW BACKEND #1 Import a custom built middleware
const { pagination } = require("./middlewares/pagination");
  

// TODO REVIEW BACKEND #2 Hide all our routes behind /api
// http://localhost:5000/api/*
const indexRouter = require("./api/index");
app.use("/api", pagination, indexRouter);

// http://localhost:5000/foo
// app.use("/foo", (req, res, next) => {
//   res.send({ foo: "bar" });
// });

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.statusCode = 404;
  next(err);
});

const utilsHelper = require("./helpers/utils.helper");

// Error handling
app.use((err, req, res, next) => {
  console.log("ERROR", err);
  if (err.isOperational) {
    return utilsHelper.sendResponse(
      res,
      err.statusCode ? err.statusCode : 500,
      false,
      null,
      { message: err.message },
      err.errorType,
    );
  } else {
    return utilsHelper.sendResponse(
      res,
      err.statusCode ? err.statusCode : 500,
      false,
      null,
      { message: err.message },
      "Internal Server Error",
    );
  }
});

module.exports = app;
