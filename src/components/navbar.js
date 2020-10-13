import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//material ui components
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

//material ui icons
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@material-ui/icons/Phone';

//redux
import { logoutUser } from '../redux/actions/userActions';

//components
import Feedback from './feedback.js';

class navbar extends Component {
    //initialize state variables
    state = {
        scrollPosition: null,
        pageHeight: document.documentElement.clientHeight,
        pageWidth: document.documentElement.clientWidth,
        anchorEl: null
    }

    //listen for user scrolls / resize
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
        window.addEventListener('resize', this.listenToResize)
    }

    //listen for user scrolls / resize
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
        window.removeEventListener('resize', this.listenToResize)
    }

    //method to set scroll position state variable
    listenToScroll = () => {
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

    //method to set window size state variables
    listenToResize = () => {
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

    //method to logout user
    handleLogout = () => {
        this.props.logoutUser();
    }

    //render navigation bar
    render() {
        let changeLogo = this.state.scrollPosition > 0.4 ? "none" : ""; //removes logo base on scroll position
        let changeNavBar = this.state.scrollPosition > 0.4 ? 'primary' : 'transparent'; //change navbar color base on scroll position
        let changeMenuAuth = this.state.scrollPosition > 0.4 ? '160px' : '10px'; //change auth menu items base on scroll position
        let changeMenu = "none"; //initiate menu to resize
        let changeMenuItem = ""; //initiate menu items to resize
        if (this.state.pageWidth < 1000) { //if window size is reduced, display logo and change menu
            changeLogo = "";
            changeMenu = "";
            changeMenuItem = "none";
        }

        //auth boolean
        const { authenticated } = this.props;

        return (
            <div className="navbar">
                <AppBar position='sticky' color={changeNavBar} elevation={0}>
                    <div className="nav-logo" style={{display:changeLogo}}> 
                        <Button color="secondary" component={Link} to="/"><h1>Everyday Eyecare</h1></Button>
                    </div>
                    <div className="menu-icon">
                        <Button>
                            <MenuIcon color="secondary" style={{fontSize:50,display:changeMenu}}/>
                        </Button>
                    </div>
                    <div className="menu-contact">
                        <Button color="secondary"><PhoneIcon style={{paddingRight:"5px"}}/><a href="tel:7037642015">703.764.2015</a></Button>
                    </div>
                    <div className="nav-container" style={{display:changeMenuItem}}>
                        <Button color="secondary" component={Link} to="/"><h4>Services</h4></Button>
                        <Button color="secondary">
                            <h4>
                                <div class="spwidget-button-wrapper">
                                    <a href="https://huong-nguyen-duong.clientsecure.me"
                                        class="spwidget-button"
                                        data-spwidget-scope-id="8c7179e6-d993-446c-85f2-76097fb180a1"
                                        data-spwidget-scope-uri="huong-nguyen-duong"
                                        data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
                                        data-spwidget-scope-global data-spwidget-autobind
                                        target="_blank"
                                    >
                                            Appointment
                                    </a>
                                </div>
                                <script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"></script>
                            </h4>
                        </Button>
                        <Button color="secondary" component={Link} to="/"><h4>About</h4></Button>
                        <Feedback/>
                        {authenticated ? (
                                <span className="nav-container-auth" style={{right:changeMenuAuth}}>
                                    <Button color="secondary" component={Link} to="/admin"><h4>Admin</h4></Button>
                                    <Button color="secondary" component={Link} to="/" onClick={this.handleLogout}><h4>Logout</h4></Button>
                                </span>
                            )
                            : (<></>)
                        }
                    </div>
                </AppBar>
            </div>
        )
    }
}

//checks prop types for auth
navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
};

//map auth state to global props
const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    user: state.user
});

//actions used
const mapActionsToProps = {
    logoutUser
};

//checks prop types for user
navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    // classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps,mapActionsToProps)(navbar);