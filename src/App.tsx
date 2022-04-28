import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {Canvas} from "./components/Canvas";
import {Footer} from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import {Routes} from "react-router-dom";
import {Board} from "./components/pages/Board";
import {Profile} from "./components/pages/Profile/Profile";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
              <Route path={"/"} element={<Board board_id={"1"}/>}/>
              <Route path={"/profile"} element={<Profile/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
