import React, { Component } from 'react'

class googleMapApi extends Component {
    render() {
        return (
            <div className="googleApi">
                <h1>Our Location</h1>
                <div class="map">
                    <iframe width="800" height="500" id="map"
                        src="https://maps.google.com/maps?q=everyday%20eye%20care&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
                </div>
            </div>
        )
    }
}

export default googleMapApi