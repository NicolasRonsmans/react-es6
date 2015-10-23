'user strict';

import React, { Component }  from 'react/react';
import CreateFragment from 'react-addons-create-fragment';
import reactMixin from 'react-mixin';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';
import helpers from '../utils/helpers';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    notes: [],
    bio: { name: 'NicolasRonsmans' },
    repos: [],
  }
  init() {
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');

    // FROM GITHUB.COM
    /*helpers.getGithubInfo(this.props.params.username)
      .then(function (data) {
        this.setState({
          repos: data[0].data,
          bio: data[1].data
        });
      }.bind(this));*/

    // MOCKED
    helpers.getGithubMockedInfo()
      .then(function (data) {
        this.setState({
          repos: data[0].data,
          bio: data[1].data,
        });
      }.bind(this));
  }
  componentDidMount() {
    this.ref = new Firebase('https://react-es6.firebaseio.com/');
    this.init();
  }
  componentWillUnmount() {
    this.unbind('notes');
  }
  componentWillReceiveProps(props) {
    this.props = props;
    this.unbind('notes');
    this.init();
  }
  handleAddNote(newNote) {
    this.ref.child(this.props.params.username).push({ desc: newNote });
  }
  render() {
    var username = this.props.params.username;

    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={username}
            notes={this.state.notes}
            addNote={this.handleAddNote.bind(this)} />
        </div>
      </div>
    );
  }
}

reactMixin(Profile.prototype, ReactFireMixin);

export default Profile;
