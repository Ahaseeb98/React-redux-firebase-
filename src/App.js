import React, { Component } from 'react';
import './App.css';
import fire from './config/firebase'
import {Provider} from 'react-redux';
import Store from './Redux/store';
// import 
// import swal from 'sweetalert';
class App extends Component {
  constructor() {
    super();
    this.state ={
      }
     }
  render() {
    // const store
    return (
      <div>
        <Provider store={Store}/>
        <h1 className="App">Redux Des</h1>

      </div>
    );
  }
}

export default App;
