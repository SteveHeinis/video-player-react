import React, { Component } from 'react';
import { Player } from 'video-react';
import "../node_modules/video-react/dist/video-react.css";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center mt-5 mb-5"> Lecteur Vidéo </h1>
          <div className="row justify-content-center">
            <div className="video col-4">
              <Player
                playsInline
                poster="/assets/poster.png"
                src="https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4"
              />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
