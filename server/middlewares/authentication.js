const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const { AppError } = require("../helpers/utils.helper");

const authMiddleware = {};

const magicians = ["Harry Potter", "Albus Dumbledore", "PrimeTimeTran"];

function requireMagician(req, res, next) {
  console.log({ hm: req.headers.authorization.split(" ") });
  let isMagical = magicians.some((wizard) => {
    return req.headers.authorization
      .split(" ")
      .some((magical) => wizard === magical);
  });
  if (isMagical) {
    next();
  } else {
    throw Error("Not magical");
  }
}

authMiddleware.loginRequired = (req, res, next) => {
  try {
    const tokenString = req.headers.authorization;
    if (!tokenString)
      return next(new AppError(401, "Login required", "Validation Error"));
    const token = tokenString.replace("Bearer ", "");
    jwt.verify(token, JWT_SECRET_KEY, (err, payload) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return next(new AppError(401, "Token expired", "Validation Error"));
        } else {
          return next(
            new AppError(401, "Token is invalid", "Validation Error")
          );
        }
      }
      req.userId = payload._id;
    });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authMiddleware;
