import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import StartingPage from "../starting-page/starting-page";
import MainPage from "../main-page/main-page";
import {BrowserRouter as Router, Route} from "react-router-dom";


import './App.css'

const App = () => {
    return (
        <Router>
            <div className="app">
                <CssBaseline />
                <Route path="/" component={StartingPage} exact />
                <Route path="/a" component={MainPage} exact />
            </div>
        </Router>


     )
}

export default App;