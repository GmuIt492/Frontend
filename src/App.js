import React, { Component } from 'react';
// npm install --save react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// npm install --save @material-ui/core
// npm install -g firebase-tools
import './App.css';

//pages
import home from './pages/home';
import login from './pages/login';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path='/' component={home}/>
                        <Route exact path='/login' component={login}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
