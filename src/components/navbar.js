import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//Material UI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

class navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <AppBar position='sticky'>
                    <Toolbar className="nav-container">
                        <Button color="inherit" component={Link} to="/">Home</Button> | 
                        <Button color="inherit" component={Link} to="/">Services</Button> | 
                        <Button color="inherit" component={Link} to="/">Eye Conditions</Button> | 
                        <Button color="inherit" component={Link} to="/">Appointments</Button> | 
                        <Button color="inherit" component={Link} to="/">About</Button>
                        {/* <Button color="inherit" component={Link} to="/login">Login</Button> */}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default navbar