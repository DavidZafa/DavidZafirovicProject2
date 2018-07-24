const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart")

router.post("/", cartController.create);
router.get("/new", cartController.new);
router.get("/:id", cartController.show);
router.put("/:id", cartController.update);

module.exports = router;
