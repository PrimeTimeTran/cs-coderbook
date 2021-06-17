const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = Schema(
  {
    body: { type: String, unique: false, default: "" },
    images: [{ type: Schema.Types.ObjectId, ref: "Image" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    reactions: [{ type: Schema.Types.ObjectId, ref: "Reaction" }],
    imageUrl: Schema.Types.String,
    owner: {
      ref: "User",
      required: true,
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
