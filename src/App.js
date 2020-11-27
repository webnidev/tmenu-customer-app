import React from "react";

import './Global.css';
import "rmwc/dist/styles";
import "material-icons";

import Home from './Components/Home';
import Header from './Components/Header';
import MainMenu from './Components/MainMenu';

function App() {
  return (
    <>
      <div className={"MasterContainer"}>
        <Header/>        
          <Home/>
        <MainMenu/>
     </div>   
    </>
  );
}

export default App;