const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = Schema(
  {
    postId: Schema.Types.ObjectId,
    url: Schema.Types.String,
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
