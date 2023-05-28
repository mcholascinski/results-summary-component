fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById('title-1').textContent = data.[0].category;
  })
  .catch(error => console.error('Error:', error));