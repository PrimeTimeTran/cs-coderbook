const Post = require("../models/Post");
const Image = require("../models/Image");

const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

const postController = {};

postController.create = catchAsync(async (req, res) => {
  const post = await Post.create({ owner: req.userId, ...req.body });
  if (req.body.imageURLS) {
    for (let imageUrl of req.body.imageURLS) { 
      const newImage = await Image.create({ postId: post.id, owner: req.userId});
      await newImage.save()
      post.images.push(newImage._id)
    }
  }
  res.json(post);
});

postController.read = catchAsync(async (req, res, next) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (!post)
    return next(new AppError(404, "Post not found", "Get Single Post Error"));

  await post.populate("owner").populate("comments").populate("images");
  await post.execPopulate();

  res.json(post);
});

postController.update = catchAsync(async (req, res) => {
  await Post.findByIdAndUpdate(
    { _id: req.params.id },
    { email: req.body.email },
    { new: true },
    (err, post) => {
      console.log({ err, post });
      if (!post) {
        res.status(404).json({ message: "Post not Found" });
      } else {
        res.json(post);
      }
    }
  );
});

postController.destroy = catchAsync(async (req, res) => {
  await Post.findByIdAndDelete(req.params.id, (err, post) => {
    if (!post) {
      res.status(404).json({ message: "Post not Found" });
    } else {
      res.json(post);
    }
  });
});

postController.list = catchAsync(async (req, res) => {
  return sendResponse(
    res,
    200,
    true,
    { posts: [{ foo: "bar" }] },
    null,
    "Login successful"
  );
});

module.exports = postController;
