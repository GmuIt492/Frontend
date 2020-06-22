import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//components
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'

//pages
import home from './pages/home';
import login from './pages/login';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar/>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={home}/>
                        <Route exact path='/login' component={login}/>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        );
    }
}

export default App;
