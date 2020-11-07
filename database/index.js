// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';
// // Database Name
// const dbName = 'myproject';
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//   const db = client.db(dbName);
// });

//===================================================
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');
mongoose.connect('mongodb://127.0.0.1/fetcher');

const db = mongoose.connection;
// console.log(db);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('succesfully connected to mongodb')
});

let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  repoId: Number,
  repoName: String,
  repoUrl: String
});

let Repo = mongoose.model('Repo', repoSchema);


let addNew = (newInput)=> {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  const newRepo = new Repo({
    repoId: newInput.id,
    repoName: newInput.name,
    repoUrl: newInput.url
  });

  newRepo.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  })
}

let getRepos = (callback) => {
  console.log('db getRepos is working');
  var answer = Repo.find({}).limit(25).sort({$natural:-1}).exec((err, result) => {
    callback(result);
  })
  // console.log('answer: ', answer.paths);
}

module.exports.save = addNew;
module.exports.getRepos = getRepos;
