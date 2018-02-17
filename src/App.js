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
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
