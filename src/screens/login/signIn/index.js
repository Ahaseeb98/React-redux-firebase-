import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import fire from '../../../config/firebase'
const provider = new fire.auth.FacebookAuthProvider();

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }

    }

    
    login() {
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log('log in');
        }).catch((error) => {
            console.log(error);
          });
      }
    
    fbLogin() {
        fire.auth().signInWithPopup(provider).then(result => {
          var user = result.user;
          console.log(user)
        }).catch(function (error) {
          alert("Error", error)
        });
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
                    padding: '10px  20px',
                    border: '4px solid #f1f1f1',
                    display: 'inline-block',
                    borderRadius: '10px',

                }
                }>
                    <h1 style={{ width: '100%', textAlign: 'center' }}>Login</h1>
                    
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
                        variant="contained"
                        color="secondary"
                        onClick={() => this.login()}
                        style={{ display: 'block', width: '100%', fontSize: '17px', padding: '17px 0px', marginTop: '30px', backgroundColor: '#00C853' }}
                    >
                        Sign in
                        </Button>
                    <Typography variant="title" gutterBottom style={{ display: 'block', width: '100%', textAlign: 'center', marginTop: '10px' }}
                    >
                        OR
                            </Typography>
                    <Button
                        variant="contained" color="primary"
                        onClick={() => this.fbLogin()}
                        style={{ display: 'block', width: '100%', fontSize: '17px', padding: '17px 0px' }}
                    >
                        Login With Facebook
                        </Button>
                    <hr />
                    <Button
                        variant="contained" color='secondary'
                        onClick={() => this.props.toggle()}
                        style={{ display: 'block', width: '100%', fontSize: '17px', padding: '17px 0px' }}
                    >
                        Sign Up
                    </Button>
                </div>

                <div>
                </div>
            </div>
        );
    }
}


export default Login;