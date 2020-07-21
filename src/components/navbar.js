import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//material ui components
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

//material ui icons
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@material-ui/icons/Phone';

//components
// import Feedback from './feedback.js';

class navbar extends Component {
    state = { //initiate state variables
        scrollPosition: null,
        pageHeight: document.documentElement.clientHeight,
        pageWidth: document.documentElement.clientWidth,
        anchorEl: null
    }
    componentDidMount() { //checks if user scrolls / resize
        window.addEventListener('scroll', this.listenToScroll)
        window.addEventListener('resize', this.listenToResize)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
        window.removeEventListener('resize', this.listenToResize)
    }
    listenToScroll = () => { //method to set scroll position state variable
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
        
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight
        
        const scrolled = winScroll / height
        
        this.setState({
            scrollPosition: scrolled,
        })
        // console.log(this.state.scrollPosition);
    }
    listenToResize = () => { //method to set window size state variables
        const height =
            document.documentElement.clientHeight;
        const width =
            document.documentElement.clientWidth;
        this.setState({
            pageHeight: height,
            pageWidth: width
        })
        // console.log(this.state.pageWidth);
    }
    render() {
        let changeLogo = this.state.scrollPosition > 0.5 ? "none" : ""; //removes logo base on scroll position
        let changeNavBar = this.state.scrollPosition > 0.5 ? 'primary' : 'transparent'; //change navbar color base on scroll position
        let changeMenu = "none"; //initiate menu to resize
        let changeMenuItem = ""; //initiate menu items to resize
        if (this.state.pageWidth < 1000) { //if window size is reduced, display logo and change menu
            changeLogo = "";
            changeMenu = "";
            changeMenuItem = "none";
        }
        const handleClick = (event) => { //handle menu click when window resized
            this.setState({
                anchorEl: event.currentTarget
            })
        };
        const handleClose = () => {
            this.setState({
                anchorEl: null
            })
        };
        return (
            <div className="navbar">
                <AppBar position='sticky' color={changeNavBar} elevation={0}>
                    <div className="nav-logo" style={{display:changeLogo}}> 
                        <Button color="secondary" component={Link} to="/"><h1>Everyday Eyecare</h1></Button>
                    </div>
                    <div className="menu-icon">
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <MenuIcon color="secondary" style={{fontSize:50,display:changeMenu}}/>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={this.state.anchorEl}
                            keepMounted
                            open={Boolean(this.state.anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                    <div className="menu-contact">
                        <Button color="secondary"><PhoneIcon style={{paddingRight:"5px"}}/><a href="tel:7037642015">703.764.2015</a></Button>
                    </div>
                    <div className="nav-container" style={{display:changeMenuItem}}>
                        <Button color="secondary" component={Link} to="/"><h4>Services</h4></Button>
                        <Button color="secondary" component={Link} to="/"><h4>Eye Conditions</h4></Button>
                        <Button color="secondary" component={Link} to="/"><h4>Appointments</h4></Button> 
                        <Button color="secondary" component={Link} to="/"><h4>About</h4></Button>
                        {/* <Feedback/> */}
                        {/* <Button color="inherit" component={Link} to="/login">Login</Button> */}
                    </div>
                </AppBar>
            </div>
        )
    }
}

export default navbar