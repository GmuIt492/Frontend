import React, { Component } from 'react'

class header extends Component {
    state = {
        pathLink: window.location.hash
    }
    componentDidMount() {
        window.addEventListener('click', this.listenToClick)
    }
    listenToClick = () => {
        this.setState({
            pathLink: window.location.hash
        })
        // console.log(this.state.pathLink);
    }
    switchMotto(path) {
        switch(path) {
            case "#/privacyPolicy":
                return "Privacy Policy";
            case "#/contact":
                return "Contact";
            case "#/termCondition":
                return "Terms & Conditions";
            case "#/login":
                return "Login";
            default:
                return "Your Eyes. Our Passion.";
        }
    }
    render() {
        let changeHeader = this.state.pathLink === "#/" ? "550px" : "275px";
        let changeMotto = this.state.pathLink === "#/" ? "475px" : "200px";
        return (
            <div className="header" style={{height:changeHeader}}>
                <h2 className="header-motto" style={{paddingTop:changeMotto}}>{this.switchMotto(this.state.pathLink)}</h2>
            </div>
        )
    }
}

export default header