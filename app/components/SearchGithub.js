'user strict';

import React, { Component, PropTypes } from 'react/react';
import { Router, History } from 'react-router';
import reactMixin from 'react-mixin';

class SearchGithub extends Component {
  handleSubmit() {
    var username = this.refs.username.value;

    this.refs.username.value = '';
    this.context.history.pushState(null, `/profile/${username}`, null);
  }
  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group  col-sm-7">
            <input type="text" className="form-control" ref="username" />
          </div>
          <div className="form-group  col-sm-5">
            <button className="btn  btn-block  btn-primary" type="submit">Search Github</button>
          </div>
        </form>
      </div>
    );
  }
}

reactMixin(SearchGithub, History);

export default SearchGithub;
