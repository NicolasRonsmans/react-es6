'user strict';

import React, { Component, PropTypes } from 'react/react';
import CreateFragment from 'react-addons-create-fragment';

class Repos extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    repos: PropTypes.array.isRequired,
  }
  render() {
    var repos = this.props.repos.map((repo) => {
      return (
        <li className="list-group-item" key={repo.id}>
          {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
          {repo.description && <p>{repo.description}</p>}
        </li>
      );
    });

    return (
      <div>
        <h3>User Repos</h3>
        <ul className="list-group">
          {repos}
        </ul>
      </div>
    );
  }
}

export default Repos;
