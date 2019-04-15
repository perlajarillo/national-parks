import React, { Component } from "react";
import "./App.css";
import { Map } from "@esri/react-arcgis";
import Parks from "../components/Parks/Parks";
import tree from "../images/tree.png";
import Footer from "./Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>National Parks in the United States.</h2>
          <p>
            Click in the icon <img src={tree} alt="logo" className="App-logo" />{" "}
            inside the map to know more about each National Park.
          </p>
        </header>
        <div style={{ width: "100vw", height: "100vh" }}>
          <Map
            viewProperties={{
              center: [-98.585522, 39.8333333],
              zoom: 3
            }}
            popup={{
              dockEnabled: true,
              dockOptions: {
                buttonEnabled: false,
                breakpoint: false
              }
            }}
          >
            <Parks />
          </Map>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
