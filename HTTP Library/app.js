const http = new easyhttp;

// GET POSTS
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if (err) {
//     console.log(err);    
//   } else {
//     console.log(posts);
    
//   }
// });

// Create data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);    
//   }
// });

// update post
http.put('https://jsonplaceholder.typicode.com/posts/40', data, function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);    
  }
});

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if (err) {
    console.log(err);    
  } else {
    console.log(response);
    
  }
});