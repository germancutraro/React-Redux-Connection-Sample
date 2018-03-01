import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectUser } from '../actions/';

class UserList extends Component {
  render() {
    return(
      <div>
        <h4>User List</h4>
        {this.props.users.map(user => <li key={user.name} onClick={() => this.props.selectUser(user)}>{user.name}</li>) }
        <hr />
      </div>
    ); 
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList );