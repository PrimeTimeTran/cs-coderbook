const Post = require("../models/Post");

const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

const postController = {};

postController.create = catchAsync(async (req, res) => {
  const post = await Post.create({ owner: req.userId, ...req.body });
  return sendResponse(
    res,
    200,
    true,
    post,
    null,
    "Post created.",
  );
});

postController.read = catchAsync(async (req, res, next) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (!post)
    return next(new AppError(404, "Post not found", "Get Single Post Error"));

  await post.populate("owner").populate("comments")
  await post.execPopulate();

  return sendResponse(res, 201, true, post, null, "Individual Post.");
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
        return sendResponse(res, 200, true, post, null, "Post updated.");
      }
    }
  );
});

postController.destroy = catchAsync(async (req, res) => {
  await Post.findByIdAndDelete(req.params.id, (err, post) => {
    if (!post) {
      res.status(404).json({ message: "Post not Found" });
    } else {
      return sendResponse(res, 204, true, null, null, "Post deleted.");
    }
  });
});

postController.list = catchAsync(async (req, res) => {
  return sendResponse(
    res,
    200,
    true,
    { 
      posts: [
        { 
          id: 0, 
          body: "Foo",
        },
        { 
          id: 1, 
          body: "Bar",
        },
      ] 
    },
    null,
    "Login successful"
  );
});

module.exports = postController;
