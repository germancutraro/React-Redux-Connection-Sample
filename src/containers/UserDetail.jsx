import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
  render() {
    if (this.props.activeUser === null) {
      return <div>Not user selected yet!</div>
    }
    return (
      <div className="User-Details">
        <h1>Name {this.props.activeUser.name}</h1>
        <h2>Age: {this.props.activeUser.age}</h2>
      </div>
    );
  }
}

function mapToStateProps(state) {
  return {
    activeUser: state.activeUser
  }
}

export default connect(mapToStateProps)(UserDetail);

