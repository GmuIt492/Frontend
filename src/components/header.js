import React, { Component } from 'react'

class header extends Component {
    //initialize state variables
    state = {
        pathLink: window.location.hash,
        images: ["header.jpg","operate.jpg","pose.jpg","micro.jpg"],
        imageIndex: 0,
        interval: 0,
        background: "transparent url(/header.jpg) center center / cover no-repeat"
    }
    
    //listen for page click / change
    componentDidMount() {
        window.addEventListener('click', this.listenToClick);
        window.addEventListener('popstate', this.listenToClick);
        setInterval(this.changeImage, 5000)
    }

    //on page click / change
    listenToClick = () => {
        this.setState({
            pathLink: window.location.hash
        })
        // console.log(this.state.pathLink);
    }

    //change header background by iterating through images array
    changeImage = () => {
        let index = this.state.imageIndex;
        if (this.state.imageIndex === this.state.images.length - 1) {
            index = 0;
        }
        else {
            index++;
        }
        this.setState({
            imageIndex: index,
            background: "transparent url(/"+this.state.images[index]+") center center / cover no-repeat"
        })
    }

    //switch case page path for header title
    switchMotto(pathLink) {
        switch(pathLink) {
            case "#/service":
                return "Services";
            case "#/about":
                return "About";
            case "#/privacyPolicy":
                return "Privacy Policy";
            case "#/contact":
                return "Contact";
            case "#/termCondition":
                return "Terms & Conditions";
            case "#/login":
                return "Login";
            case "#/admin":
                return "Admin";
            default:
                return "Your Eyes. Our Passion.";
        }
    }

    //render header banner
    render() {
        let changeHeader = !this.state.pathLink.match(/[a-z]/i) ? "550px" : "275px"; //size of picture
        let changeMotto = !this.state.pathLink.match(/[a-z]/i) ? "475px" : "200px"; //location of title
        return (
            <div className="header" style={{height:changeHeader,background:this.state.background}}>
                <h2 className="header-motto" style={{paddingTop:changeMotto}}>{this.switchMotto(this.state.pathLink)}</h2>
            </div>
        )
    }
}

export default header