import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {Canvas} from "./components/Canvas";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Canvas/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
