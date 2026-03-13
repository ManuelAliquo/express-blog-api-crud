const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}/`;
const requestLogger = require("./middlewares/requestLogger.js");
const notFound = require("./middlewares/notFound");
const errorsHandler = require("./middlewares/errorsHandler");

const postsRouter = require("./routers/posts.js");

// middlewares
app.use(requestLogger);
app.use(express.json());
app.use(express.static("public"));

// routes
app.use("/posts", postsRouter);

// error handlers
app.use(notFound);
app.use(errorsHandler);

app.listen(port, () => {
  console.log(`Server avviato su ${appUrl}`);
});
