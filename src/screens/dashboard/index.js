import React, { Component } from 'react';
import 'typeface-roboto';
import fire from '../../config/firebase'
import {data} from '../../Redux/action/autjAction'
import { connect } from 'react-redux'
class Database extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount(){
      let arr = [];
    fire.database().ref('schoolList').on('child_added', e => {
        arr.push(e.val())
        this.props.data(arr)
    })
  }

  render() {
      console.log(this.props)
    return (
      <div>
        <h1>Dash Board</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        d: state.authReducers.data
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        data: (d) => dispatch(data(d)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Database)