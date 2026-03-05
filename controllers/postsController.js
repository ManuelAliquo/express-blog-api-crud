// array import
const postsList = require("../data/postsList.js");

// index (get)
function index(req, res) {
  let filteredPosts = postsList;

  if (req.query.tag) filteredPosts = postsList.filter((post) => post.tags.includes(req.query.tag));

  if (filteredPosts.length === 0)
    return res.json({
      success: true,
      message: "Nessun post trovato",
    });

  res.status(200).json({
    success: true,
    result: filteredPosts,
  });
}

// show (get:id)
function show(req, res) {
  const postId = parseInt(req.params.id);

  const post = postsList.find((post) => post.id === postId);

  if (!post)
    return res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });

  res.status(200).json({
    success: true,
    result: post,
  });
}

// store (post)
function store(req, res) {
  const posts = [...postsList];

  const newId = posts[posts.length - 1].id + 1;

  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };

  postsList.push(newPost);

  console.log(postsList);

  res.status(201).json({
    success: true,
    message: "Creato nuovo post",
    result: newPost,
  });
}

// update (put:id)
function update(req, res) {
  const posts = [...postsList];

  const postId = parseInt(req.params.id);

  const postToUpdate = posts.find((post) => post.id === postId);

  if (!postToUpdate)
    return res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });

  postToUpdate.title = req.body.title;
  postToUpdate.content = req.body.content;
  postToUpdate.image = req.body.image;
  postToUpdate.tags = req.body.tags;

  res.status(200).json({
    success: true,
    message: `Modifica integrale del post ${req.params.id}`,
    result: postToUpdate,
  });
}

// modify (patch:id)
function modify(req, res) {
  const posts = [...postsList];

  const postId = parseInt(req.params.id);

  const postToModify = posts.find((post) => post.id === postId);

  if (!postToModify)
    return res.status(404).json({
      success: false,
      message: "Post non trovato",
    });

  const { title, content, image, tags } = req.body;

  if (title !== undefined) postToModify.title = title;
  if (content !== undefined) postToModify.content = content;
  if (image !== undefined) postToModify.image = image;
  if (tags !== undefined) postToModify.tags = tags;

  res.status(200).json({
    success: true,
    message: `Modifica parziale del post ${req.params.id}`,
    result: postToModify,
  });
}

// destroy (delete:id)
function destroy(req, res) {
  const postId = parseInt(req.params.id);

  const post = postsList.find((post) => post.id === postId);

  if (!post)
    return res.status(404).json({
      success: false,
      message: "Post non trovato",
    });

  postsList.splice(postsList.indexOf(post), 1);

  res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };
