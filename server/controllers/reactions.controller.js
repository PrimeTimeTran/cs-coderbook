
const mongoose = require("mongoose");
const Post = require("../models/Post");
const Reaction = require("../models/Reaction");

const {
  catchAsync,
} = require("../helpers/utils.helper");

const reactionController = {};

reactionController.create = catchAsync(async (req, res) => {
  const reaction = await Reaction.create({
    owner: req.userId,
    type: req.body.type,
    post: req.body.reactionableId,
    reactionableId: req.body.reactionableId,
    reactionableType: req.body.reactionableType,
  });


  const post = await mongoose
    .model("Post")
    .findById(req.body.reactionableId)
    .exec();
  // const post = await Post.findById(req.body.reactionableId);

  post.reactions.push(reaction._id);

  await post.save();

  res.json(reaction);
});

module.exports = reactionController;
