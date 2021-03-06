import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.getRepos = this.getRepos.bind(this);
  }

  getRepos(callback) {
    $.ajax({
      type: 'GET',
      url: '/repos',
      contentType: 'application/json',
      success: callback
    })
  }

  search (term) {
    // TODO
    $.ajax({
      type: "POST",
      url: '/repos',
      contentType: 'application/json',
      data: JSON.stringify(term),
      success: () => {
        this.getRepos((data) => {
          this.setState({
            repos: data
          })
        })
      },
    })
  }


  componentDidMount() {
    this.getRepos((data) => {
      this.setState({
        repos: data
      })
    })
  }

  render () {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <Search onSearch={this.search.bind(this)}/>
        <RepoList repos={this.state.repos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));