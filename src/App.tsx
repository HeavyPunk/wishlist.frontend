import React from 'react';
import './App.css';
import {BrowserRouter, Outlet, useParams} from "react-router-dom";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Board} from "./components/pages/Board";
import {Profile} from "./components/pages/Profile/Profile";
import AuthorizationWindow from "./components/pages/Authorization/Authorization"

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
          <Routes>
              <Route path={"/"} element={<AuthorizationWindow/>}/>
              <Route path={"/profile"} element={<Profile/>}/>
              <Route path={"/board/:board_id"} element={<Board/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
