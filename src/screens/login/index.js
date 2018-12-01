import React, { Component } from 'react';
import SignIn from './signIn'
import SignUp from './signUp'
import {updateUser, removeUser} from '../../Redux/action/autjAction'
import { connect } from 'react-redux'
import DashBoard from '../dashboard'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            signup: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            signup: !this.state.signup,
        })
    }

    render() {
        const { signup } = this.state
        return (
            <div style={{
                paddingTop: '1%',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                flexDirection: 'row',
            }}>
                {
                    this.props.user === null
                    ?
                    !signup
                     ? 
                    <SignIn toggle={this.toggle}/>
                     : 
                    <SignUp toggle={this.toggle}/>
                    :
                    <DashBoard/>
                }
                <div>
                </div>
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