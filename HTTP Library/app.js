const http = new easyhttp;

// GET POSTS
http.get('https://jsonplaceholder.typicode.com/posts', function(response) {
  console.log(response);  
});