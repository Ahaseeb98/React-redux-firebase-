import React, { Component } from 'react';
import './App.css';
// import fire from './config/firebase'
import { store, persistor } from './Redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import Login from './components'
import 'typeface-roboto';
// import swal from 'sweetalert';
class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    console.log(store)
    return (
      <div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <center>
              <h1 className="App">Boiler Plate</h1>
              <Login/>
            </center>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
