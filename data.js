fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; data.lenght <= 3; i++) {
      document.getElementById('category-' + (i + 1)).textContent = data[i].category;
      document.getElementById('score-' + (i + 1)).textContent = data[i].score;
      document.getElementById('icon-' + (i + 1)).src = data[i].icon;
    }
  })
  .catch(error => console.error('Error:', error));