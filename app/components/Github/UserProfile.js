'user strict';

import React, { Component, PropTypes } from 'react/react';
import CreateFragment from 'react-addons-create-fragment';

class UserProfiles extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    bio: PropTypes.object.isRequired,
  }
  render() {
    return (
      <div>
        <h3>User Profile</h3>
        <ul className="list-group">
          {this.props.bio.avatar_url !== 'undefined' && <li className="list-group-item"><img src={this.props.bio.avatar_url} style={{width: '100%'}} /></li>}
          {this.props.bio.name !== 'undefined' && <li className="list-group-item">Name: {this.props.bio.name}</li>}
          {this.props.bio.login !== 'undefined' && <li className="list-group-item">Login: {this.props.bio.login}</li>}
          {this.props.bio.email !== 'undefined' && <li className="list-group-item">Email: {this.props.bio.email}</li>}
          {this.props.bio.location !== 'undefined' && <li className="list-group-item">Location: {this.props.bio.location}</li>}
          {this.props.bio.company !== 'undefined' && <li className="list-group-item">Company: {this.props.bio.company}</li>}
          {this.props.bio.followers !== 'undefined' && <li className="list-group-item">Followers: {this.props.bio.followers}</li>}
          {this.props.bio.following !== 'undefined' && <li className="list-group-item">Following: {this.props.bio.following}</li>}
          {this.props.bio.public_repos !== 'undefined' && <li className="list-group-item">Public Repos: {this.props.bio.public_repos}</li>}
          {this.props.bio.blog !== 'undefined' && <li className="list-group-item">Blog: <a href={this.props.bio.blog}>{this.props.bio.blog}</a></li>}
        </ul>
      </div>
    );
  }
}

export default UserProfiles;
