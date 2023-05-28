fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Update HTML elements with JSON data
    // document.getElementById('title').textContent = data.title;
    // document.getElementById('description').textContent = data.description;
  })
  .catch(error => console.error('Error:', error));