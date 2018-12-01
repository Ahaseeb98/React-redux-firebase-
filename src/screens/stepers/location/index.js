import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Button from '@material-ui/core/Button'

class googleMap extends Component {
  constructor() {
    super()
    this.state = {
      coords: null,
      x: '',
      ok: null
    };

    this.updateCoords = this.updateCoords.bind(this);
    // this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    this.setPosition();
  }

  updateCoords({ latitude, longitude }) {
    this.setState({
      coords: { latitude, longitude },
    })
  }

  setPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ coords: position.coords })
      console.log(position.coords)
      console.log(this.state.coords)
    });
  }
  render() {
    const { coords} = this.state;
    console.log('x', coords)
    return (
      <div className="App map">
        {coords && <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `80%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `400px` }} />}
          coords={coords}
          updateCoords={this.updateCoords}
        />}
        <br />
        <Button variant="contained" onClick={() => this.props.location({
      lat: this.state.coords.latitude,
      lng: this.state.coords.longitude
    })} color="secondary">Submit</Button>

      </div>
    )
  }

}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
  >
    {props.isMarkerShown &&
      <Marker
        position={{ lat: props.coords.latitude, lng: props.coords.longitude }}
        draggable={true}
        onDragEnd={position => {
        props.updateCoords({ latitude: position.latLng.lat(), longitude: position.latLng.lng() })
        }}
      />}
  </GoogleMap>
))

export default googleMap;