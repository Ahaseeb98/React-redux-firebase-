import React, { Component } from 'react';
import {updateUser, removeUser} from '../Redux/action/autjAction'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';

class Login extends Component {
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this)
  }

  signIn() {
    const res = {name: 'Kashif', id: '231321', beverages: ['coffee']}

    this.props.updateUser(res)
  }

  render() {
      console.log(this.props)
    return (
      <div>
          <h1>Login</h1>
          <Button variant="contained" color="primary" onClick={this.signIn}>Sign in</Button>
          <Button variant="contained" color="secondary" onClick={() => this.props.removeUser()}>Log out</Button>
      </div>
    );
  }
 }

const mapStateToProps = (state) => {
    return {
        user: state.authReducers.user
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        removeUser: (user) => dispatch(removeUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)