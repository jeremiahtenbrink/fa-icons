import React from "react";
import logo from "./logo.svg";
import FaIcon from "./components/FaIcon";
import FeatherIcon from "./components/FeatherIcon";
import IonIcon from "./components/IonIcons";
import "./App.css";

function App(){
    return ( <div className="App">
        <header className="App-header">
            <FaIcon name={ "500Px" }/>
            <FeatherIcon name={ "Airplay" }/>
            <IonIcon name={ "IosAdd" }/>
        </header>
    </div> );
}

export default App;
