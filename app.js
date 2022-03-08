const express = require('express');
  http = require('http');
  url = require('url');
  path = require('path');
  app = express();
  port = 8081;

// app.use(express.static(`${__dirname}/public`));

// app.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/index.html`, (err) => {
//     if (err) {
//       console.log(err);
//       res.send(err.message);
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// });



app.set('views', __dirname+'/public');
app.use('/', express.static(path.join(
  __dirname+"/public")));
// Serves static files
app.use('/static', express.static(__dirname+"/static"));

app.get('/', (req, res) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  res.render('index');
});


http.createServer(app).listen(process.env.PORT || port, () => {
  console.log(`listening on port ${process.env.PORT || port}`);
});
