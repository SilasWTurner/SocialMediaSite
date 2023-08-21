const express = require('express');
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
    const postsList = await Posts.findAll({
        order: [["createdAt", "DESC"]],
        limit: 10
    });
    const response = [];
    for (const post of postsList){
        const username = "Jeremy";
        response.push({id: post.id, title: post.title, content: post.content, username: username, createdAt: post.createdAt, updatedAt: post.updatedAt})
    }
    
    res.json(response);
});

router.get("/fromID/:id", async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    const username = "Jeremy"
    res.json({id: post.id, title: post.title, content: post.content, username: username, createdAt: post.createdAt, updatedAt: post.updatedAt});
});

router.post("/", async (req, res) => {
    const post = req.body;
    const userid = 0;

    await Posts.create({title: post.title, content: post.content, userid: userid});
    res.json(post);
});

module.exports = router;