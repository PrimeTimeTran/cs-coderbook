const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = Schema(
  {
    url: Schema.Types.String,
    postId: Schema.Types.ObjectId,
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

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
