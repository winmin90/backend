const express = require("express");
const router = express.Router();

const { Post } = require("../models");
const { Comment } = require("../models");
const { like } = require("../models");

const authMiddleware = require("../middlewares/auth-middleware");

router.post("/post/:postId/like", authMiddleware, async (req, res) => {
  try{
    const { channel } = await res.locals.user;
    const { postId } = req.params;
  }catch(error){
  const message = `${req.method} ${req.originalUrl} : ${error.message}`;
  console.log(message);
  res.status(400).json({ message });
  }
});
