import {useState } from "react";
import Post from "./Post";
import PostForm from "./PostForm";
import {getPosts, addPost as addPostsLocal, removePost, updatePost} from "../utils/Storage";
import "./Blog.scss";


const Blog = () => {
    const [newpost, setPosts]= useState(getPosts()); // lo metemos aqui para que se vean los post q hay

const addPost = (post) =>{
    const id= newpost.reduce((maxId,post) => Math.max(post.id,maxId),-1) +1;
    post.id = id;
    setPosts([...newpost,post]); {/* este viene del postform variable "post"onSubmit (post) */}
    addPostsLocal(post);
}


const deletePost = (id) =>{
    setPosts(newpost.filter((element) => element.id !== id))
    removePost(id);
}


const editPost =(editedPost) =>{
    const newPosts = [...newpost];
    const index = newPosts.findIndex((post)=> post.id === editedPost.id); 
    newPosts[index] = editedPost;
    setPosts(newPosts);
    updatePost(editedPost);
}


    return (
      <div className="containerblog">
            <section className="blog">
            <h1 className="titleBlog">Blog</h1>
                {newpost.map((element) => (
                    <Post key={element.id} post={element} onDelete={deletePost} onEdit={editPost}/>
                ))}
            </section>
            <section className="formblog">
                <h1 className="titleformblog">Crea tu blog </h1>
                <PostForm onSubmit={addPost}/>
            </section>
        </div>
    );
};

export default Blog;