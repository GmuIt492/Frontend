import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//Material UI
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

//css
import './App.css';

//components
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'

//pages
import home from './pages/home';
import login from './pages/login';

//util
import themeFile from './util/theme';

const theme = createMuiTheme(themeFile);

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Router>
                        <Header/>
                        <Navbar/>
                        <Switch>
                            <Route exact path='/' component={home}/>
                            <Route exact path='/login' component={login}/>
                        </Switch>
                        <Footer/>
                    </Router>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;