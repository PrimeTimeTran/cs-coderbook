const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = Schema(
  {
    body: { type: String, unique: false, default: "" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    images: [{ type: Schema.Types.ObjectId, ref: "Images" }],
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
