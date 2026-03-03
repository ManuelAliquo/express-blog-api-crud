// array import
const postsList = require("../data/postsList.js");

// index (get)
function index(req, res) {
  let filteredPosts = postsList;

  if (req.query.tag) {
    filteredPosts = postsList.filter((post) => post.tags.includes(req.query.tag));
  }

  if (filteredPosts.length === 0) {
    return res.json({
      result: [],
      success: true,
      message: "Nessun post trovato",
    });
  }

  res.json({
    result: filteredPosts,
    success: true,
  });
}

// show (get:id)
function show(req, res) {
  const id = parseInt(req.params.id);

  const post = postsList.find((post) => post.id === id);

  if (!post) {
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  const responseData = {
    result: post,
    success: true,
  };

  res.status(200).json(responseData);
}

// store (post)
function store(req, res) {
  res.send("Creazione nuovo post");
}

// update (put:id)
function update(req, res) {
  const id = parseInt(req.params.id);

  const post = postsList.find((post) => post.id === id);

  if (!post) {
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  res.send(`Modifica integrale del post ${req.params.id}`);
}

// modify (patch:id)
function modify(req, res) {
  const id = parseInt(req.params.id);

  const post = postsList.find((post) => post.id === id);

  if (!post) {
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  res.send(`Modifica parziale del post ${req.params.id}`);
}

// destroy (delete:id)
function destroy(req, res) {
  const id = parseInt(req.params.id);

  const post = postsList.find((post) => post.id === id);

  if (!post) {
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  postsList.splice(postsList.indexOf(post), 1);

  console.log(postsList);

  res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };
