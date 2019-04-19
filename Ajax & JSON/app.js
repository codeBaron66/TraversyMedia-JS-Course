document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);
  xhr.onload = function() {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      // console.log(customer);
      const output = `
        <ul>
          <li>Name: ${customer.name}</li>
          <li>ID: ${customer.id}</li>
          <li>Company: ${customer.company}</li>
          <li>Name: ${customer.phone}</li>
        </ul>
      `;
      // const customerDiv = document.getElementById('customer');
      // customerDiv.innerHTML = output;
      document.getElementById('customer').innerHTML = output;
    }
  }
  xhr.send();
}