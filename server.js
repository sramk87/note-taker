const fs = require('fs');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.get('/notes', (req, res) => {
    let data = notes;
    res.json(data);
  });



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });