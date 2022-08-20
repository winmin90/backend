const express = require("express");
const router = express.Router();

const postsRouter = require("./posts");

const commentsRouter = require("./comments");
// const usersRouter = require("./users");
// const likesRouter = require("./likes");

// router.use("/", usersRouter);
// router.use("/like", likesRouter);
router.use("/comment", commentsRouter);

router.use("/post", postsRouter);

module.exports = router;