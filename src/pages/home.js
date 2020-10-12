import React, { Component } from 'react'

//components
import Test from '../components/test'
import Slideshow from '../components/slideshow'
import Insurance from '../components/insurance'
import GoogleMapApi from '../components/googleMapApi'

class home extends Component {
    //render homepage
    render() {
        return (
            <div className="homepage">
                <h1>Home page</h1>
                <Test/>
                <Slideshow/>
                <Insurance/>
                <GoogleMapApi/>
            </div>
        )
    }
}

export default home