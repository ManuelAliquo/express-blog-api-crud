const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}/`;
const notFound = require("./middlewares/notFound");
const errorsHandler = require("./middlewares/errorsHandler");

const postsRouter = require("./routers/posts.js");

// middlewares
app.use(express.json());

// routes
app.use("/posts", postsRouter);

// error handlers
app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`Server avviato su ${appUrl}`);
});
