import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import fire from '../../../config/firebase'
import swal from 'sweetalert';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }

    }

    signup(){
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            swal("Success!", "You've successfully Signed Up", "success");
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            swal("warning!", 'Something went wrong!', "warning");
          })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <div style={{
                paddingTop: '1%',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                flexDirection: 'row',
            }}>
                <div style={{
                    minWidth: '250px',
                    maxWidth: '400px',
                    padding: '10px 20px',
                    border: '4px solid #f1f1f1',
                    display: 'inline-block',
                    borderRadius: '10px',

                }
                }>
                    <h1 style={{ width: '100%', textAlign: 'center' }}>Sign Up</h1>
                    
                    <TextField
                        id="outlined-full-width"
                        // style={{ margin: 8 }}
                        placeholder="Email..."
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        style={{ display: 'block', margin: '20px 0px' }}
                        InputLabelProps={{
                            shrink: true,
                        }} />
                    <TextField
                        id="filled-password-input"
                        placeholder="Password..."
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        style={{ display: 'block', marginTop: '20px' }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <Button
                        variant="contained" color='secondary'
                        onClick={() => this.signup()}
                        style={{ display: 'block', width: '100%', fontSize: '17px', padding: '17px 0px' }}
                    >
                        Sign Up
                        </Button>
                    <hr />

                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => this.props.toggle()}
                        // onClick={() => this.setState({signup: false})}
                        style={{ display: 'block', width: '100%', fontSize: '17px', padding: '17px 0px', marginTop: '30px', backgroundColor: '#00C853' }}
                    >
                        Sign in
                        </Button>

                </div>
            </div>
        );
    }
}


export default Login;