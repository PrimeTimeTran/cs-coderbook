const Event = require("../models/Event.model");

const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

const eventsController = {};

eventsController.create = catchAsync(async (req, res) => {
  const event = await Event.create({ owner: req.userId, ...req.body });
  sendResponse(res, 201, true, event);
});

eventsController.read = catchAsync(catchAsync(async (req, res, next) => {}));

eventsController.update = catchAsync(catchAsync(async (req, res) => {}));

eventsController.destroy = catchAsync(catchAsync(async (req, res) => {}));

eventsController.list = catchAsync(async (req, res) => {
  sendResponse(res, 201, true, {
    events: [
      { id: 1, title: "Spring" },
      { id: 2, title: "Summer" },
      { id: 3, title: "Authem" },
      { id: 4, title: "Winter" },
    ],
  });
});

module.exports = eventsController;
