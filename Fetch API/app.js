document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
  fetch('test.txt')
    .then(function(res){
      return res.text();
    })
    .then(function(data){
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
      console.log(err);    
    });
}

function getJson() {
  fetch('post.json')
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log(data);
      let output = '';
      data.forEach(function(post){
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);    
    });
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log(data);
      let output = '';
      data.forEach(function(people){
        output += `<img src=${people.avatar_url}>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);    
    });
}