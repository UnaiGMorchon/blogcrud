


const getPosts =() => {
    const newpost = localStorage.getItem('posts');
    return newpost ? JSON.parse(newpost) : [];
};

const addPost =(post) => {
    const newpost = getPosts();
    newpost.push(post);
    localStorage.setItem('posts', JSON.stringify(newpost));
};

const removePost =(id) => {
    const newpost = getPosts();
    const newPosts = newpost.filter(element => element.id !== id);
    localStorage.setItem('posts', JSON.stringify(newPosts));
};


const updatePost =(post) =>{
    const newpost =getPosts();
    const newPosts = newpost.map(element => {
        if(element.id === post.id) {
            return post;
        }
        return element;
});
localStorage.setItem("posts", JSON.stringify(newPosts));
}


export {
getPosts,
addPost,
removePost,
updatePost
}