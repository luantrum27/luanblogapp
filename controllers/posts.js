import { Post } from '../models/Post.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        console.log('post: ', posts);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
export const createPost = async (req, res) => {
    try {
        const newPost = req.body;
        const post = new Post(newPost);
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        req.status(500).json({ error: error });
    }
}

export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;
        const post = await Post.findOneAndUpdate(
            { _id: updatePost._id },
            updatePost,
            {
                new: true
            });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}