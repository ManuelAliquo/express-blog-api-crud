const express = require("express");
const router = express.Router();

const postsList = require("../data/posts.js");

router.get("/", (req, res) => {
  const responseData = {
    result: postsList,
    success: true,
  };

  res.status(200).json(responseData);
});

router.get("/:id", (req, res) => {
  const responseData = {
    result: postsList.find((post) => post.id === parseInt(req.params.id)),
    success: true,
  };

  res.status(200).json(responseData);
});

router.post("/", (req, res) => {
  res.send("Creazione nuovo post");
});

router.put("/:id", (req, res) => {
  res.send(`Modifica integrale del post ${req.params.id}`);
});

router.patch("/:id", (req, res) => {
  res.send(`Modifica parziale del post ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Eliminazione del post ${req.params.id}`);
});

module.exports = router;
