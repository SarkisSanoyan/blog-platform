const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

// POST endpoint to add a new post
router.post("/add", async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required." });
    }

    const newPost = new Post({ title, description, date: new Date() });
    await newPost.save();

    res.status(201).json(newPost);
    console.log("New post added:", newPost);
  } catch (error) {
    console.error("Error adding post:", error);
    res.status(500).json({ message: "Error adding post to database", error });
  }
});

// PUT endpoint to edit a post
router.put("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required." });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, description, date: new Date() },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found." });
    }

    res.status(200).json(updatedPost);
    console.log("Post updated:", updatedPost);
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ message: "Error updating post", error });
  }
});

// DELETE endpoint to delete a post
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found." });
    }

    res.status(200).json({ message: "Post deleted successfully." });
    console.log("Post deleted:", deletedPost);
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Error deleting post", error });
  }
});

// GET endpoint to fetch a single post by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }

    res.status(200).json({ post });
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ message: "Error fetching post", error });
  }
});

// GET endpoint to retrieve all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

module.exports = router;
