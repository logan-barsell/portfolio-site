const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`, (err) => {
    if (err) {
      console.log(err);
      res.send(err.message);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});