const express = require('express');
const bodyParser = require('body-parser');
const githubAPI = require('../helpers/github.js');
const DB = require('../database/index.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  githubAPI.getReposByUsername(req.body.term, (err, response)=> {
    if (err) {
      res.sendStatus(404);
    } else {
      response.data.forEach((repo) =>{
        console.log('\n\nrepo id: ' + repo.id + '\nrepo name: ' + repo.name + '\nrepo url: ' + repo.html_url)
        DB.save({
          id: Number(repo.id),
          name: repo.name,
          url: repo.html_url
        });
        //DB.save(repo);
      })
      //console.log(response.data);
      res.sendStatus(201);
    }
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos


});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

