const Foo = require("../models/Foo.model");

const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

const foosController = {};

// CREATE FOO
foosController.create = catchAsync(async (req, res) => {
  const event = await Event.create({ owner: req.userId, ...req.body });
  sendResponse(res, 201, true, event);
});

// READ FOO
foosController.read = catchAsync(catchAsync(async (req, res, next) => {}));

// UPDATE FOO
foosController.update = catchAsync(catchAsync(async (req, res) => {}));

// DESTROY FOO
foosController.destroy = catchAsync(catchAsync(async (req, res) => {}));

foosController.list = catchAsync(async (req, res) => {
  sendResponse(res, 201, true, {
    events: [
      { id: 1, title: "Spring" },
      { id: 2, title: "Summer" },
      { id: 3, title: "Authem" },
      { id: 4, title: "Winter" },
    ],
  });
});

module.exports = foosController;
