import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.search = this.search.bind(this);
  }

  handleInput(e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
    this.setState({
      term: ''
    })
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.term} onChange={this.handleInput}/>
      <button onClick={this.search}> Add Repos </button>
    </div>)
  }
}

export default Search;