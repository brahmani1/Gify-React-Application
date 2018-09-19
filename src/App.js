import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GiphySearchComponent from './components/giphysearch.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
          <div class="container">
            <a class="navbar-brand" href="#">Header</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
            </div>
          </div>
        </nav>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <GiphySearchComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
