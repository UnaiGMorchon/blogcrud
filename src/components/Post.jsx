import { useState } from "react";
import PostForm from "./PostForm";



const Post =({post, onDelete, onEdit}) => {
const [editing, setEditing] = useState(false);

const handleDelete = () => {
    onDelete(post.id);
}

const handleEdit =(editedPost) => {
    editedPost.id =post.id;
    onEdit(editedPost,);
    setEditing(false);

}

    return (
         editing ? 
         <PostForm post={post} onSubmit={handleEdit} onCancel={() => setEditing(false)}/> // lo primero muestra los datos y lo segundo los edita
         :
            <article>
                   <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <button onClick={()=> setEditing(true)}>Editar </button>
                  <button onClick={handleDelete}>Borrar </button>
            </article>
    );
}

export default Post;