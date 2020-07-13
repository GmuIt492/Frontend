import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//Material UI
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'

class navbar extends Component {
    // componentDidMount() {
    //     window.addEventListener('scroll', this.listenToScroll)
    // }
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.listenToScroll)
    // }
    // listenToScroll = () => {
    //     const winScroll =
    //         document.body.scrollTop || document.documentElement.scrollTop
        
    //     const height =
    //         document.documentElement.scrollHeight -
    //         document.documentElement.clientHeight
        
    //     const scrolled = winScroll / height
        
    //     this.setState({
    //         scrollPosition: scrolled,
    //     })
    // }
    render() {
        return (
            <div className="navbar">
                <AppBar position='sticky' color='transparent' elevation={0}>
                    <div className="nav-logo">
                        <Button color="secondary" component={Link} to="/" disableElevation="true"><h1>Everyday Eyecare</h1></Button>
                    </div>
                    <div className="nav-container">
                        <Button color="secondary" component={Link} to="/">Services</Button>
                        <Button color="secondary" component={Link} to="/">Eye Conditions</Button>
                        <Button color="secondary" component={Link} to="/">Appointments</Button> 
                        <Button color="secondary" component={Link} to="/">About</Button>
                        {/* <Button color="inherit" component={Link} to="/login">Login</Button> */}
                    </div>
                </AppBar>
            </div>
        )
    }
}

export default navbar