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
    render() {
        let changeHeader = this.state.pathLink === "/" ? "800px" : "400px";
        let changeMotto = this.state.pathLink === "/" ? "400px" : "200px";
        return (
            <div className="header" style={{height:changeHeader}}>
                <h2 className="header-motto" style={{padding:changeMotto}}>Your Eyes. Our Passion.</h2>
            </div>
        )
    }
}

export default header