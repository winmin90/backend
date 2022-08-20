const express = require("express");
const router = express.Router();
const { Comment, User, Post } = require("../models");


router.post("/:postId", async (req, res) => {
    const { comment } = req.body;
    const { postId } = req.params;
    await Comment.create({ comment, postId });
    res.status(201).json({
        ok: true,
        message: "댓글을 생성하였습니다.",
    })
})


module.exports = router;
