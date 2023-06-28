const express = require("express");
const { upload } = require('../uploads');
const { postImage } = require('../Controller/controller');

const router = express.Router();

router.post("/", upload.single("image"), postImage);

module.exports = router 