const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authentication");
const eventsController = require("../controllers/events.controller");

router.post("/", authMiddleware.loginRequired, eventsController.create);
router.get("/", authMiddleware.loginRequired, eventsController.list);
router.put("/:id", authMiddleware.loginRequired, eventsController.update);
router.delete("/:id", authMiddleware.loginRequired, eventsController.destroy);

module.exports = router;
