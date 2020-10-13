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
                <div className="welcome">
                    <h1>We would like to welcome you to Everyday Eyecare.</h1>
                    <p>Our professionals help you to see clearly and manage the health and wellness of your vision.
                    Our team evaluates and educates every patient in a respectful and courteous manner.
                    We offer distinctive and customized vision services and solutions that are appropriate for you and always provide the level of service that we would like to receive as patients. 
                    At Everyday Eyecare, the key to our success has been our commitment to "Exceed Our Patients' Expectations".
                    Our staff offers the highest vision care available, personalized attention and a passion for exceptional customer service.
                    Come and take a look at our wide selection of high quality eyewear products - the selection is so good, you will have to see it to believe it!</p>
                </div>
                <Slideshow/>
                <Insurance/>
                <GoogleMapApi/>
            </div>
        )
    }
}

export default home