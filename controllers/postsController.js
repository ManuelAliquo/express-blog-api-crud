// array import
const postsList = require("../data/postsList.js");

function index(req, res) {
  const responseData = {
    result: postsList,
    success: true,
  };

  res.status(200).json(responseData);
}

function show(req, res) {
  const responseData = {
    result: postsList.find((post) => post.id === parseInt(req.params.id)),
    success: true,
  };

  res.status(200).json(responseData);
}

function store(req, res) {
  res.send("Creazione nuovo post");
}

function update(req, res) {
  res.send(`Modifica integrale del post ${req.params.id}`);
}

function modify(req, res) {
  res.send(`Modifica parziale del post ${req.params.id}`);
}

function destroy(req, res) {
  const id = parseInt(req.params.id);

  const post = postsList.find((post) => post.id === id);

  if (!post) {
    res.status(404);
    return res.json({
      status: 404,
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  postsList.splice(postsList.indexOf(post), 1);

  console.log(postsList);

  res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };
