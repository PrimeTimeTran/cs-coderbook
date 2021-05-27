const Post = require("../models/Post");
const Reaction = require("../models/Reaction");

const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

const reactionController = {};

reactionController.create = catchAsync(async (req, res) => {
  const reaction = await Reaction.create({
    type: "Like",
    owner: req.userId,
    post: req.body.targetId,
  });

  const post = await Post.findById(req.body.targetId);
  post.reactions.push(reaction._id);

  await post.save();

  res.json(reaction);
});

module.exports = reactionController;
