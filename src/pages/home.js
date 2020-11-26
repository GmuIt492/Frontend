import React, { Component } from 'react'

//material ui components
import Button from '@material-ui/core/Button'

//components
import HeaderNotif from '../components/headerNotif'
import Insurance from '../components/insurance'
import GoogleMapApi from '../components/googleMapApi'

class home extends Component {
    //render homepage
    render() {
        return (
            <div className="homepage">
                <HeaderNotif/>
                <div className="welcome">
                    <h1 className="welcome-header">Welcome To Everyday Eyecare</h1>
                    <p>
                        Our professionals help you to see clearly and manage the health and wellness of your vision.
                        Our team evaluates and educates every patient in a respectful and courteous manner.
                        We offer distinctive and customized vision services and solutions that are appropriate for you and always provide the level of service that we would like to receive as patients. 
                        At Everyday Eyecare, the key to our success has been our commitment to "Exceed Our Patients' Expectations".
                        Our staff offers the highest vision care available, personalized attention and a passion for exceptional customer service.
                        Come and take a look at our wide selection of high quality eyewear products - the selection is so good, you will have to see it to believe it!
                    </p>
                    <p>
                        Helping you to see your best is our mission, and the professionals at Everyday Eyecare are dedicated to taking care of your eyes.
                        We understand how important eye health and appearance are to the quality of your life.
                        Through regular eye exams and preventive vision care, we can help detect vision problems such as glaucoma and cataracts before they become serious.
                        Schedule a visit now for you and your family! We will be honored to have you as a patient and look forward to providing you with our services.
                    </p>
                </div>
                <div className="schedule">
                    <h1 className="welcome-header">Schedule An Appointment With Us Today!</h1>
                    <p>Schedule One Online&nbsp;
                        <Button variant="contained" color="primary">
                            <span>
                                <div className="spwidget-button-wrapper">
                                    <a href="https://everydayeyecare.clientsecure.me"
                                        className="spwidget-button"
                                        data-spwidget-scope-id="8c7179e6-d993-446c-85f2-76097fb180a1"
                                        data-spwidget-scope-uri="everydayeyecare"
                                        data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
                                        data-spwidget-scope-global data-spwidget-autobind
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                            Here
                                    </a>
                                </div>
                            </span>
                        </Button>
                        &nbsp;Or Call Us At&nbsp;
                        <Button variant="contained" color="primary">
                            <a href="tel:7037642015">703.764.2015</a>
                        </Button>
                    </p>
                </div>
                <Insurance/>
                <GoogleMapApi/>
            </div>
        )
    }
}

export default home