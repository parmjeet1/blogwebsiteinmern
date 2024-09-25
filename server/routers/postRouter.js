const express=require('express');
const { createPost, getAllPost,singlePost,getUserPost,getCatPosts,editPost,deletePost } = require('../controllers/postControllers');
const { authMiddleware } = require('../middlewares/authMiddleware');
const postRouter=express.Router();
postRouter.post('/createPost', authMiddleware ,createPost );
postRouter.get('/getAllPost',getAllPost );
postRouter.get('/singlePost/:id', singlePost );
postRouter.get('/category/:category', getCatPosts );
postRouter.get('/user-post/:id', getUserPost );

postRouter.put('/edit-post/:id',authMiddleware,editPost );
postRouter.delete('/delete-post/:postId',authMiddleware, deletePost );

module.exports={postRouter};