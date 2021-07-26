// TODO REVIEW BACKEND #7 Lastly we'll use Models to define properties and associated data. For example a company and it's jobs.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fooSchema = Schema(
  {
    foo: String,
    bar: { type: String, unique: false, default: "Foo" },
    spam: [{ body: String, date: Date }],
    ham: { type: Date, default: Date.now },
    fizz: String,
    fuzz: {
      favs: Number,
      votes: Number,
    },
  },
  {
    timestamps: true,
  },
);

const Foo = mongoose.model("Foo", fooSchema);

module.exports = Foo;
