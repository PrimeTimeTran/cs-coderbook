const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = Schema(
  {
    url: Schema.Types.String,
    imageableId: {
      required: true,
      type: Schema.Types.ObjectId,
    },
    imageableType: {
      type: String,
      enum: {
        required: true,
        values: ["Post", "Comment", "User", "Message"],
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

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
