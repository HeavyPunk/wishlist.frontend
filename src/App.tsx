import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BoardHeader} from "./components/BoardHeader";
import {Canvas} from "./components/Canvas";
import {Footer} from "./components/Footer";
import {BrowserRouter, Outlet, useParams} from "react-router-dom";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Board} from "./components/pages/Board";
import {Profile} from "./components/pages/Profile/Profile";

function Comp(){
    const params = useParams()
    return(
      <p>{params.board_id}</p>
    );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
              <Route path={"/"} element={<Profile/>}/>
              <Route path={"/board/:board_id"} element={<Board/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
