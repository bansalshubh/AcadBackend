const express = require("express");
const Post = require("../models/Posts");
const router = express.Router();

router.get('/fetchposts',async (req,res)=>{
    let success = false;
    try {
        let posts = await Post.find({username:req.query.username});
        res.status(200).send(posts);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post('/addPost',async (req,res)=>{
    let success = false;
    let { username, content, bio } = req.body;
    try {
        const post = await Post.create({
            username: username,
            content: content,
            bio: bio
        });
        success = true;
        res.status(200).json({success,post});
    } catch (error) {
        res.status(500).json({success:success, message: "Internal Server Error" });
    }
});

module.exports = router;