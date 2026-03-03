const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}/`;
const postsRouter = require("./routers/posts");

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server avviato su ${appUrl}`);
});
