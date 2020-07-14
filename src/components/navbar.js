import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//Material UI
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

class navbar extends Component {
    state = { //initiate state variables
        scrollPosition: null,
        pageHeight: document.documentElement.clientHeight,
        pageWidth: document.documentElement.clientWidth
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
    listenToResize = () => {//method to set window size state variables
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
        return (
            <div className="navbar">
                <AppBar position='sticky' color={changeNavBar} elevation={0}>
                    <div className="nav-logo" style={{display:changeLogo}}> 
                        <Button color="secondary" component={Link} to="/" disableElevation="true"><h1>Everyday Eyecare</h1></Button>
                    </div>
                    <MenuIcon color="secondary" className="menu-icon" style={{fontSize:50,display:changeMenu}}>
                        <Button/>
                    </MenuIcon>
                    <div className="nav-container" style={{display:changeMenuItem}}>
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