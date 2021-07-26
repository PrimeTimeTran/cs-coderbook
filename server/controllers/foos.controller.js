// TODO REVIEW BACKEND #4 Where the routing magic happens

const Foo = require("../models/Foo.model");

const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

const foosController = {};

// CREATE a foo
// - Allows a client to create a new foo.
// - Should only allow admissable parameters for a new instance of a foo.
foosController.create = catchAsync(async (req, res) => {
});

// READ a foo
// - Allows a client to retrieve a list of foos.
// - Should handle query params such as page, limit, sorting, search, etc.
// - Often produces related data. The comments of a post for a example.
foosController.read = catchAsync(catchAsync(async (req, res, next) => {}));

// UPDATE FOO
// - Allows a client to update a previous instance of a foo.
// - Should only allow admissable parameters to be updated by the client.
foosController.update = catchAsync(catchAsync(async (req, res) => {}));

// DESTROY FOO
// - Allows a client to destroy an instance of a foo.
// - Should authenticate/authorize that the client can destroy the foo.
foosController.destroy = catchAsync(catchAsync(async (req, res) => {}));

module.exports = foosController;
