import React, { Component } from 'react';
import './App.css';
import { store, persistor } from './Redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import Login from './screens/login'
import 'typeface-roboto';
// import swal from 'sweetalert';
// import Stepers from './screens/stepers'
class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <center>
              <Login/>
            </center>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
