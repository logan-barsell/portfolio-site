const express = require('express');
  http = require('http');
  url = require('url');
  path = require('path');
  app = express();
  port = 8081;

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
