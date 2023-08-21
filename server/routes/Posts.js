const express = require('express');
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
    const postsList = await Posts.findAll({
        order: [["createdAt", "DESC"]],
        limit: 10,
        include : "Account"
    });
    
    res.json(postsList);
});

router.get("/fromID/:id", async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findAll({
        where: {
            id: id
        },
        include : "Account"
    });
    res.json(post);
});

router.post("/", async (req, res) => {
    const post = req.body;

    await Posts.create(post);
    res.json(post);
});

module.exports = router;