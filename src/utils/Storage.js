


const getPosts =() => {
    const newpost = localStorage.getItem('posts');
    return newpost ? JSON.parse(newpost) : [];
};

const addPost =(post) => {
    const newpost = getPosts();
    newpost.push(post);
    localStorage.setItem('posts', JSON.stringify(newpost));
};

const removePost =(post) => {
    const newpost = getPosts();
    const newPosts = newpost.filter(element => newpost !== element);
    localStorage.setItem('posts', JSON.stringify(newPosts));
};

