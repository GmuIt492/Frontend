import React, { Component } from 'react'

class googleMapApi extends Component {
    render() {
        return (
            <div className="googleApi">
                <h1>Our Location</h1>
                <div className="map">
                    <iframe width="100%" height="500" id="map" title="map"
                        src="https://maps.google.com/maps?q=everyday%20eye%20care&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                    </iframe>
                </div>
            </div>
        )
    }
}

export default googleMapApi