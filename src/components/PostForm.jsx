import { useState } from "react";


const PostForm =({onSubmit,post, onCancel}) =>{
const [title, setTitle] = useState(post? post.title : ""); // con esto aparece el contenido del formulario par editar
const [body, setBody] = useState(post?.body); // esto es igual q el de arriba perode otra forma de hacerlo.

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {title, body};
        onSubmit (post);
        setBody("");
        setTitle("");
}

const handleCancel =(e)=>{
    e.preventDefault();
    onCancel();
}


return (

    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} /> {/* cada ve q lo cambia lo guarda en el estado */}
        <label htmlFor="title">Contenido</label>
        <textarea type="text" id="title" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button type="submit" >{post ? "guardar" : "crear"}</button> {/* ternario que si no es guardar sino crear */}
        {post && <button onClick={handleCancel}>Cancelar</button>}
    </form>

);

}

export default PostForm;