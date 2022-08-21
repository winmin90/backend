const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth-middleware");
const { Post, User } = require("../models");


// 게시물 생성
router.post("/", async (req, res) => {
    try {
        //   const { channel } = res.locals.user
        //   const { userimage } = await Users.findOne({ where : { channel: channel }})
        const { title, discription, category, url } = req.body
        if (title === "" || discription === "" || category === "" || url === "") {
            res.status(400).json({
                ok: false,
                errorMessage: "제목, 동영상, 카테고리, 내용을 입력해주세요.",
            })
            return
        }

        await Post.create({
            title, discription, category, url,
        })
        res.status(200).json({
            result: true,
            message: "작성 완료",
        });
        return
    } catch (err) {
        res.status(400).json({
            ok: false,
            errorMessage: "게시물 생성에 실패했습니다.",
        })
        return
    }
});

// 게시물 조회(메인)
router.get("/", async (req, res) => {
    const posts = await Post.findAll()
    res.json({
        result: posts.map((post) => ({
            title: post.title,
            category: post.category,
            description: post.description,
            url: post.url,
            like: post.like,
            channel: post.channel
        }))
    })

});

// 게시물 조회(카테고리)
router.get("/serch/:category", async (req, res) => {
    const { category } = req.params;
    const posts = await Post.findAll({ where: { category } })
    res.json({
        result: posts.map((post) => ({
            title: post.title,
            category: post.category,
            description: post.description,
            url: post.url,
            like: post.like,
            channel: post.channel
        }))
    })

});


//  게시물 상세조회(detail페이지) 
router.get("/:postId", async (req, res) => {
    // try {
    const { postId } = req.params;
    const post = await Post.findOne({
        where: { postId },
        include: {
            model: User,
            attributes: ["channel", "userimage"]
        }
    })
    res.json({
        result: {
            title: post.title,
            category: post.category,
            description: post.description,
            url: post.url,
            like: post.like,
            channel: post.channel
        }
    })
});
//게시물 수정  
router.put("/:postId", async (req, res) => {
    // const { channel }= res.locals.user
    const { postId } = req.params;
    const { title, discription, category, url } = req.body;
    const post = await Post.findOne({ where: { postId } })
    if (title === "" || discription === "" || category === "" || url === "") {
        res.status(400).json({
            ok: false,
            errorMessage: "제목, 동영상, 카테고리, 내용을 입력해주세요.",
        })
    } else {
        post.update({
            title: title,
            discription: discription,
            category: category,
            url: url
        })
        res.json({
            result: {
                title: post.title,
                category: post.category,
                description: post.description,
                url: post.url,
                like: post.like,
                channel: post.channel
            }})

    }
})

//게시글 삭제    
router.delete("/:postId", async (req, res) => {
    // const { channel }= res.locals.user
    const { postId } = req.params;
    const post = await Post.findOne({ where: { postId } })
    await post.destroy()
    res.json({ 
        resutl : true,
        message : "게시글을 삭제하였습니다."})

})




module.exports = router;


