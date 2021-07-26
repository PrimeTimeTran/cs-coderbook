const Comment = require("../models/Comment.model");

const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

const friendshipsController = {};

friendshipsController.create = catchAsync(async (req, res) => {
});

friendshipsController.read = async (req, res) => {
};

friendshipsController.update = async (req, res) => {
};

friendshipsController.destroy = async (req, res) => {
};

friendshipsController.list = async (req, res) => {
};

module.exports = friendshipsController;
