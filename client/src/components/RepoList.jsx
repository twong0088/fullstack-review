import React from 'react';
import RepoEntry from './repoEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <div>
      There are {props.repos.length} repos.
    </div><br />
    {props.repos.map((repo, index) => (
      <RepoEntry key={index} repo={repo}/>
    ))}
  </div>
)

export default RepoList;