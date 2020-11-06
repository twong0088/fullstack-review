const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
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
    repoUrl: newInput.owner.url
  });

  newRepo.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  })

}

module.exports.save = addNew;