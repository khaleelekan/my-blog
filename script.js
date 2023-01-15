 const postsContainer = document.getElementById('posts-container');
 const loader = document.querySelector('.loader');

 let limit = 3;
 let page = 1;

 //fetch post from api
 async function getPosts(){
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limits=${limit}&_page=${page}`
        );

        const data = await res.json();

        return data;
 } 

 //show post in dom
 async function showPosts() {
    const posts = await getPosts();

    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = ` 
         <div class='number'>${post.id}</div>
         <div class='post-info'>
         <h2 class='post-title'>${post.title}</h2>
         <p class='post-body'>${post.body}</p>
         </div>`

         postsContainer.appendChild(postEl);
    });

   

   
 }

 //show posts
 showPosts();