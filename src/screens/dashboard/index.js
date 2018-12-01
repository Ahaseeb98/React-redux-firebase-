import React, { Component } from 'react';
  import 'typeface-roboto';
  import fire from '../../config/firebase'
class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

//   componentDidMount(){
//     fire.database().ref('data').on('child_added', e => {

//     })
//   }

  render() {
    return (
      <div>
        <h1>Dash Board</h1>
      </div>
    );
  }
}

export default App;
