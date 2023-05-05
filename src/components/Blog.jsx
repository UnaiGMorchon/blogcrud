import {useState } from "react";
import Post from "./Post";
import PostForm from "./PostForm";

const Blog = () => {
    const [newpost, setPosts]= useState([]);



const addPost = (post) =>{
    const id= newpost.reduce((maxId,post) => Math.max(post.id,maxId),-1) +1;
    post.id = id;
    setPosts([...newpost,post]); {/* este viene del postform variable "post"onSubmit (post) */}
}


const deletePost = (id) =>{
    setPosts(newpost.filter((element) => element.id !== id))
}



const editPost =(editedPost) =>{
    const newPosts = [...newpost];
    const index = newPosts.findIndex((post)=> post.id === editedPost.id); 
    newPosts[index] = editedPost;
    setPosts(newPosts);
}


    return (
      <div>
            <section>
            <h1>Blog</h1>
                {newpost.map((element) => (
                    <Post key={element.id} post={element} onDelete={deletePost} onEdit={editPost}/>
                ))}
            </section>
            <section>
                <h1>Crea tu blog </h1>
                <PostForm onSubmit={addPost}/>
            </section>
            </div>
    );
};

export default Blog;