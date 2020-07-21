import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';

//material ui components
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

//css
import './App.css';

//components
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
import ScrollToTop from './components/scrollToTop';

//pages
import home from './pages/home';
import privacyPolicy from './pages/privacyPolicy';
import contact from './pages/contact';
import termCondition from './pages/termCondition';
import login from './pages/login';

//util
import themeFile from './util/theme';

axios.defaults.baseURL = "https://us-central1-everyday-eyecare.cloudfunctions.net/api";
// axios.defaults.baseURL = "http://localhost:5000/everyday-eyecare/us-central1/api";

const theme = createMuiTheme(themeFile);

store.dispatch({ type: SET_AUTHENTICATED });

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <div className="App">
                        <Router>
                            <Header/>
                            <Navbar/>
                            <ScrollToTop>
                                <Switch>
                                    <Route exact path='/' component={home}/>
                                    <Route exact path='/privacyPolicy' component={privacyPolicy}/>
                                    <Route exact path='/contact' component={contact}/>
                                    <Route exact path='/termCondition' component={termCondition}/>
                                    <Route exact path='/login' component={login}/>
                                </Switch>
                            </ScrollToTop>
                            <Footer/>
                        </Router>
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
