'user strict';

import React, { Component } from 'react/react';

class NotesList extends Component {
  render() {
    var notes = this.props.notes.map((note, index) => {
      return <li className="list-group-item" key={index}>{note.desc}</li>
    });

    return (
      <ul className="list-group">
        {notes}
      </ul>
    );
  }
}

export default NotesList;
