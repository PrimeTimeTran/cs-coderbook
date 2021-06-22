const Comment = require("../models/Comment");

// We don't use AppError & sendResponse in this controller.
const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

const friendshipsController = {};

friendshipsController.create = catchAsync(async (req, res) => {
  const comment = await Comment.create({
    owner: req.userId,
    body: req.body.body,
    post: req.body.postId,
  });

  res.json(comment);
});

friendshipsController.read = async (req, res) => {
  const comment = await Comment.findOne({ _id: req.params.id }).populate(
    "owner"
  );
  if (!comment) {
    res.status(404).json({ message: "Comment not found." });
  } else {
    res.json(comment);
  }
};

friendshipsController.update = async (req, res) => {
  await Comment.findByIdAndUpdate(
    { _id: req.params.id },
    { email: req.body.email },
    { new: true },
    (err, comment) => {
      console.log({ err, comment });
      if (!comment) {
        res.status(404).json({ message: "Comment not found." });
      } else {
        res.json(comment);
      }
    }
  );
};

friendshipsController.destroy = async (req, res) => {
  await Comment.findByIdAndDelete(req.params.id, (err, comment) => {
    if (!comment) {
      res.status(404).json({ message: "Comment not found." });
    } else {
      res.json(comment);
    }
  });
};

friendshipsController.list = async (req, res) => {
  await Comment.find({}, (err, comments) => {
    if (!comments) {
      res.status(404).json({ message: "Comments not found." });
    } else {
      res.json(comments);
    }
  });
};

module.exports = friendshipsController;
