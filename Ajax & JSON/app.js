document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);
  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);      
    }
  }
  xhr.send();
}