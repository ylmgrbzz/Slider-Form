const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    soru1: String,
    soru2: String,
    soru3: String,
    soru4: String,
    username: String,
    email: String,
    phone: Number,
    description: String,
  },
  { timestamps: true, versionKey: false }
);

const Forms = mongoose.model("Forms", FormSchema);
module.exports = Forms;
