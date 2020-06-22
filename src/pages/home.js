import React, { Component } from 'react'

//components
import Slideshow from '../components/slideshow'
import Insurance from '../components/insurance'
import GoogleMapApi from '../components/googleMapApi'

class home extends Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>
                <Slideshow/>
                <Insurance/>
                <GoogleMapApi/>
            </div>
        )
    }
}

export default home