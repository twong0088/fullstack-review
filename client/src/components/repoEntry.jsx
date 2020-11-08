import React from 'react';

const RepoEntry = (props) => (
  <div id='repo'>
      <span>Title: {props.repo.repoName}</span><br />
      <span>Repo ID: {props.repo.repoId}</span><br />
      <span>Repo URL: <a href={props.repo.repoUrl}>{props.repo.repoUrl}</a></span> <br />
      {/* Click <a href="http://www.yahoo.com">here</a> to go to yahoo.

      <span>Repo URL: {props.repo.repoUrl}</span><br /> */}
    <br />
  </div>
)

export default RepoEntry;