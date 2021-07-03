const Post = require("../models/Post.model");

const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

const postController = {};

postController.create = catchAsync(async (req, res) => {
  const post = await Post.create({ owner: req.userId, ...req.body });
  return sendResponse(res, 200, true, post, null, "Post created.");
});

postController.list = catchAsync(async (req, res) => {
  return sendResponse(
    res,
    200,
    true,
    {
      foos: [
        ["Foo", "Apple", "Yonkers", "NY", 490_000],
        ["Bar", "Facebook", "Hartford", "CT", 390_000],
        ["Fizz", "Apple", "Hartford", "CT", 290_000],
        ["Fuzz", "Google", "Tampa", "FL", 390_000],
        ["Buzz", "Amazon", "Hartford", "CT", 190_000],
        ["Spam", "Netflix", "Yonkers", "NY"],
        ["Ham", "Airbnb", "Dallas", "TX"],
        ["Eggs", "Uber", "Yonkers", "NY", 410_000],
        ["Kegs", "Paypal", "Dallas", "TX", 350_000],
        ["Legs", "Visa", "Yonkers", "NY"],
        ["Alpha", "Google", "Tallahassee", "FL", 280_000],
        ["Beta", "Apple", "Tampa", "FL", 300_000],
        ["Charlie", "Facebook", "Jacksonville", "FL", 250_000],
      ],
    },
    null,
    "You've got posts!",
  );
});

postController.read = catchAsync(async (req, res, next) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (!post)
    return next(new AppError(404, "Post not found", "Get Single Post Error"));

  await post.populate("owner").populate("comments");
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
    },
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

module.exports = postController;
