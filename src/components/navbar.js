import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

//Material UI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

class navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollPosition: 0
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }
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
    }
    changeOnScroll = () => {
        if (this.scrollPosition < 0) {
            return {
            }
        }
        else {
            return {}
        }
    }
    render() {
        return (
            <div className="navbar">
                <AppBar position='sticky' color='transparent' elevation={0}>
                    <div className="nav-logo" style={this.changeOnScroll}>
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

const mapStateToProps = state => ({  
    nav:state.nav
})

export default connect(mapStateToProps)(navbar)