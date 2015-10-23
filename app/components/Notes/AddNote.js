'user strict';

import React, { Component, PropTypes } from 'react/react';

class AddNote extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    addNote: PropTypes.func.isRequired,
  }
  handleSubmit() {
    var newNote = this.refs.note.value;

    this.refs.note.value = '';
    this.props.addNote(newNote);
  }
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="note" placeholder="Add New Note" />
        <span className="input-group-btn">
          <button className="btn  btn-default" type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
        </span>
      </div>
    );
  }
}

export default AddNote;
