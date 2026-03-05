const express = require("express");
const router = express.Router();

// validator import
const postValidator = require("../middlewares/postValidator");

// controller import
const postsController = require("../controllers/postsController.js");

router.get("/", postsController.index);

router.get("/:id", postsController.show);

router.post("/", postValidator, postsController.store);

router.put("/:id", postValidator, postsController.update);

router.patch("/:id", postValidator, postsController.modify);

router.delete("/:id", postsController.destroy);

module.exports = router;
