import React, { Component } from 'react';
import SignIn from './signIn'
import SignUp from './signUp'

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
        // console.log(this.state)
        return (
            <div style={{
                paddingTop: '1%',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                flexDirection: 'row',
            }}>
                {
                    !signup
                     ? 
                    <SignIn toggle={this.toggle}/>
                     : 
                    <SignUp toggle={this.toggle}/>
                }
                <div>
                </div>
            </div>
        );
    }
}


export default Login;