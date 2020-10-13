import React, { Component } from 'react'

class header extends Component {
    //initialize state variables
    state = {
        pathLink: window.location.hash
    }
    
    //listen for page click / change
    componentDidMount() {
        window.addEventListener('click', this.listenToClick)
    }

    //on page click / change
    listenToClick = () => {
        this.setState({
            pathLink: window.location.hash
        })
        // console.log(this.state.pathLink);
    }

    //switch case page path for header title
    switchMotto(pathLink) {
        switch(pathLink) {
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

    //render header banner
    render() {
        let changeHeader = this.state.pathLink === "#/" ? "550px" : "275px"; //size of picture
        let changeMotto = this.state.pathLink === "#/" ? "475px" : "200px"; //location of title
        return (
            <div className="header" style={{height:changeHeader}}>
                <h2 className="header-motto" style={{paddingTop:changeMotto}}>{this.switchMotto(this.state.pathLink)}</h2>
            </div>
        )
    }
}

export default header