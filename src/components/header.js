import React, { Component } from 'react'

class header extends Component {
    state = {
        pathLink: window.location.pathname
    }
    componentDidMount() {
        window.addEventListener('click', this.listenToClick)
    }
    listenToClick = () => {
        this.setState({
            pathLink: window.location.pathname
        })
        // console.log(this.state.pathLink);
    }
    switchMotto(path) {
        switch(path) {
            case "/privacyPolicy":
                return "Privacy Policy";
            case "/contact":
                return "Contact";
            case "/termCondition":
                return "Terms & Conditions";
            default:
                return "Your Eyes. Our Passion.";
        }
    }
    render() {
        let changeHeader = this.state.pathLink === "/" ? "600px" : "300px";
        let changeMotto = this.state.pathLink === "/" ? "500px" : "200px";
        return (
            <div className="header" style={{height:changeHeader}}>
                <h2 className="header-motto" style={{paddingTop:changeMotto}}>{this.switchMotto(this.state.pathLink)}</h2>
            </div>
        )
    }
}

export default header