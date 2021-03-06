import React, { Component } from 'react';
import SeasonDisplay from "./SeasonDisplay"
import Loader from "./Loader"

class App extends Component {
  state = { lat: null, errMessage: '' }

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }

  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>
    }
    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return (
      <Loader message={'Please accept location request'} />
    )
  }
}

export default App;
