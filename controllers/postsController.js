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
  const postId = parseInt(req.params.id);

  const post = postsList.find((post) => post.id === postId);

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
  console.log(req.body);

  res.status(201);
  return res.json({
    result: "Creato nuovo post",
    success: true,
  });
}

// update (put:id)
function update(req, res) {
  const postId = parseInt(req.params.id);

  const post = postsList.find((post) => post.id === postId);

  if (!post) {
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  res.json({
    result: `Modifica integrale del post ${req.params.id}`,
    success: true,
  });
}

// modify (patch:id)
function modify(req, res) {
  const postId = parseInt(req.params.id);

  const post = postsList.find((post) => post.id === postId);

  if (!post) {
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  res.json({
    result: `Modifica parziale del post ${req.params.id}`,
    success: true,
  });
}

// destroy (delete:id)
function destroy(req, res) {
  const postId = parseInt(req.params.id);

  const post = postsList.find((post) => post.id === postId);

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
