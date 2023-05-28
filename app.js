fetch('https://github.com/mcholascinski/results-summary-component/blob/3f3d937a08063f1c21129f62fd4f02b9512d2496/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Update HTML elements with JSON data
    // document.getElementById('title').textContent = data.title;
    // document.getElementById('description').textContent = data.description;
  })
  .catch(error => console.error('Error:', error));