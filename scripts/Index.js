
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    displayData(data);
  })
  .catch(error => {
    console.log(error);
  });

function displayData(data) {
  const container = document.getElementById('data-container');
  const heading = document.createElement('h2');
  heading.textContent = '¡Nuestros principales benefactores! ¡Gracias por su donacion!';
  container.appendChild(heading);
  const list = document.createElement('ul');
  data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item.name;
    list.appendChild(listItem);
  });
  container.appendChild(list);
}
