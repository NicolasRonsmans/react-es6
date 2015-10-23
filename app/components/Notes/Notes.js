'user strict';

import React, { Component, PropTypes } from 'react/react';
import NotesList from './NotesList';
import AddNote from './AddNote';

class Notes extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    notes: PropTypes.array.isRequired,
    addNote: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div>
        <h3> Notes for {this.props.username} </h3>
        <AddNote username={this.props.username} addNote={this.props.addNote} />
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
}

export default Notes;
