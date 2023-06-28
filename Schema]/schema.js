const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  filepath: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Image", ImageSchema);