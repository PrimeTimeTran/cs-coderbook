const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = Schema(
  {
    body: { type: String, unique: false, default: "" },
    reactions: [{ type: Schema.Types.ObjectId, ref: "Reaction" }],
    commentableId: {
      required: true,
      type: Schema.Types.ObjectId,
    },
    commentableType: {
      type: String,
      enum: {
        required: true,
        values: ["Post", "Comment"],
        message: "{VALUE} is not supported",
      },
    },
    owner: {
      ref: "User",
      required: true,
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  },
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment
