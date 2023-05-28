fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('category-1').textContent = data[0].category;
    document.getElementById('score-1').textContent = data[0].score;
    document.getElementById('icon-1').src = "./assets/images/" + data[0].icon;
  })
  .catch(error => console.error('Error:', error));