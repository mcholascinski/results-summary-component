fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    let scoreSum = 0;
    for (let i = 0; i < data.length; i++) {
      document.getElementById('category-' + (i + 1)).textContent = data[i].category;
      document.getElementById('score-' + (i + 1)).textContent = data[i].score;
      document.getElementById('icon-' + (i + 1)).src = data[i].icon;
      scoreSum += data[i].score;
    }
    document.getElementById('result').textContent = scoreSum;
  })
  .catch(error => console.error('Error:', error));