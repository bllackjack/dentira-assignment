
const express = require('express');
const app = express();
const { handleData } = require('./controller');

app.get('/search', (req, res) => {

  const query = req.query['q']
  const data = handleData(query)
  res.send(JSON.stringify(data));
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});