const { v4: uuid } = require("uuid");
const fs = require("fs").promises;
const path = require("path");
const postModel = require("../models/postModel");
const { userModel } = require("../models/userModel");
const { insertFileintoFirebase } = require("../firebase/insertFile");
const DeleteFileFromFirebase = require("../firebase/deleteFile");
const createPost = async (req, res) => {
  try {
    const { title, category, description } = req.body;
    if (!req.files || !req.files.thumbnail) {
      return res.status(422).json({ error: "File not received" });
    }
    const { thumbnail } = req.files;

    if (!title || !category || !description) {
      return res.status(422).json({ error: "Fields cannot be blank" });
    }
    if (thumbnail.size > 2000000) {
      return res
        .status(422)
        .json({ error: "Thumbnail cannot be more than 2MB" });
    }

    let fileName = thumbnail.name;
    let splittedFileName = fileName.split(".");
    let newFileName = `${splittedFileName[0]}-${uuid()}.${
      splittedFileName[splittedFileName.length - 1]
    }`;
    const metaData={
        contentType:thumbnail.mimetype
                }
const thumbnailUrl= await  insertFileintoFirebase(newFileName,thumbnail.data,metaData);
if(!thumbnailUrl)
{
    return res.status(422).json({error:"File not uploaded"});
}
// console.log(thumbnailUrl);
const newPost = await postModel.create({
      title,
      category,
      thumbnail: thumbnailUrl,
      creator: req.user.id,
      description,
    });
    const currentUser = await userModel.findById(req.user.id);
    const userPostCount = currentUser.posts + 1;
    await userModel.findByIdAndUpdate(req.user.id, {posts: userPostCount},{new: true});
    // await userModel.findByIdAndUpdate(req.user.id, { $inc: { posts: 1 } });

    return res.status(200).json({ message: "Post successfully created", newPost });
    // await thumbnail.mv(path.join(__dirname, "..", "uploads", newFileName));

    
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
const getAllPost = async (req, res) => {
  try {
    const allPost = await postModel.find().sort({ updatedAt: -1 });
    return res.status(200).json({ allPost });
  } catch (error) {
    console.log(error);
    return res.status(422).json({ error: "Internal Error" });
  }
};
const singlePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const singlePost = await postModel.findById(postId).sort({ updatedAt: -1 });
    return res.status(200).json({ singlePost });
  } catch (error) {
    console.log(error);
    return res.status(422).json({ error: "Internal Error" });
  }
};
const getCatPosts = async (req, res) => {
  try {
    const category = req.params.category;
    const catposts = await postModel.find({ category }).sort({ updatedAt: -1 });
    if (!catposts) {
      return res.status(422).json({ error: "No post found" });
    }
    return res.status(200).json({ catposts });
  } catch (error) {
    console.log(error);
    return res.status(422).json({ error: "Internal Error" });
  }
};

const getUserPost = async (req, res) => {
  try {
    const userId = req.params.id;
    const userPosts = await postModel
      .find({ creator: userId })
      .sort({ updatedAt: -1 });
    if (userPosts) {
      return res.status(200).json({ userPosts });
    } else {
      return res.status(422).json({ error: "No post found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(422).json({ error: "Internal Error" });
  }
};

const editPost = async (req, res) => {
  try {
    let fileName;
    let newFileName;
    let updatedPost;
    const postId = req.params.id;
    const { title, category, description } = req.body;
    if (!title || !category || !description) {
      return res.status(422).json({ error: "Fill in all fields" });
    }
    if (!req.files) {
      updatedPost = await postModel.findByIdAndUpdate(
        postId,
        { title, category, description },
        { new: true }
      );
    } else {
      //get old post from db
      const oldPost = await postModel.findById(postId);
      //Delete old thumbnail form upload
      DeleteFileFromFirebase(oldPost.thumbnail);
    //   fs.unlink(
    //     path.join(__dirname, "..", "uploads", oldPost.thumbnail),
    //     (error) => {
    //       if (error) {
    //         return res.status(422).json(error);
    //       }
    //     }
    //   );
      //Upload new thumbnail
      const { thumbnail } = req.files;
      if (thumbnail.size > 2000000) {
        return res
          .status(422)
          .json({ error: "Thumbnail too big, file should be less than 2mb" });
      }
      fileName = thumbnail.name;
      let splittedFilename = fileName.split(".");
      newFileName =
        splittedFilename[0] +
        uuid() +
        "." +
        splittedFilename[splittedFilename.length - 1];
        const metaData={
            contentType:thumbnail.mimetype
                    }
    const thumbnailUrl= await  insertFileintoFirebase(newFileName,thumbnail.data,metaData);
    const updatedPost = await postModel.findByIdAndUpdate(
                postId,
                { title, category, description, thumbnail: thumbnailUrl },
                { new: true }
              );
              if (!updatedPost) {
                return res.status(422).json({ error: "Post couldn't be updated" });
              }
              return res.status(200).json(updatedPost);
   
    //   thumbnail.mv(
    //     path.join(__dirname, "..", "uploads", newFileName),
    //     async (error) => {
    //       if (error) {
    //         return res.status(422).json({ error });
    //       }

    //       const updatedPost = await postModel.findByIdAndUpdate(
    //         postId,
    //         { title, category, description, thumbnail: newFileName },
    //         { new: true }
    //       );
    //       if (!updatedPost) {
    //         return res.status(422).json({ error: "Post couldn't be updated" });
    //       }
    //       return res.status(200).json(updatedPost);
    //     }
    //   );
    }
  } catch (error) {
    console.log(error);
    return res.status(422).json({ error: "Internal Server Error" });
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    console.log(postId);
    const databasePost = await postModel.findById(postId);
    if (!databasePost) {
      return res.status(422).json({ error: "post not found" });
    }
    const thumbnail = databasePost.thumbnail;
    DeleteFileFromFirebase(thumbnail);
    // fs.unlink(path.join(__dirname, "..", "uploads", thumbnail));
    // const deletePost = await postModel.findByIdAndDelete(postId);
    return res.status(200).json({ message: "post deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(422).json({ error: "Internal Error" });
  }
};
module.exports = {
  createPost,
  getAllPost,
  singlePost,
  getCatPosts,
  getUserPost,
  editPost,
  deletePost,
};
