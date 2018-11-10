import React, { Component } from 'react';
// import logo from './logo.svg';
import Login from './login/login';
import swal from 'sweetalert';
class Quizes extends Component {
  constructor(props){
    super(props);
  this.state = {
      
    quizes: [
        {

        },{

        }
    ]

    ,
    logpasss: ''
  }
  }

  render() {

    return (     
      <div>
        <div className="App" id="quizForm">
        

        </div>
        
      </div>
    );
  }
}

export default Quizes;
