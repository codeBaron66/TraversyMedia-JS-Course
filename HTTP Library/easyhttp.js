function easyhttp() {
  this.http = new XMLHttpRequest();
}

// make HTTP GET Request
easyhttp.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);
  let self = this;
  this.http.onload = function () {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);      
    } else {
      callback('error: ' + self.http.status);
    }
  }
  this.http.send();
}

// make HTTP POST Request
easyhttp.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('content-type', 'application/json');
  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

// make HTTP PUT Request
easyhttp.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('content-type', 'application/json');
  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

// make HTTP DELETE Request
easyhttp.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);
  let self = this;
  this.http.onload = function () {
    if(self.http.status === 200) {
      callback(null, 'Post Deleted');      
    } else {
      callback('error: ' + self.http.status);
    }
  }
  this.http.send();
}