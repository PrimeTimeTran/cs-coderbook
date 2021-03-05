var express = require("express");
var router = express.Router();

const authMiddleware = require("../middlewares/authentication");
const reactionController = require("../controllers/reactions.controller");

router.post("/", authMiddleware.loginRequired, reactionController.create);

module.exports = router;
