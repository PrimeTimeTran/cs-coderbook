var express = require("express");
var router = express.Router();

const authMiddleware = require("../middlewares/authentication");
const friendshipsController = require("../controllers/friendships.controller");

router.post("/", authMiddleware.loginRequired, friendshipsController.create);
router.get("/", friendshipsController.list);
router.get("/:id", friendshipsController.read);
router.put("/:id", friendshipsController.update);
router.delete("/:id", friendshipsController.destroy);

module.exports = router;
