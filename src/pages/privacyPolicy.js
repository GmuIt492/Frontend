import React, { Component } from 'react'

//material ui components
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class privacyPolicy extends Component {
    //initialize state variables
    state = {
        expanded: null,
    }

    //render privacy policy page
    render() {
        const handleChange = (panel) => (event, isExpanded) => { //handle expanded panel open/close
            this.setState({
                expanded: isExpanded ? panel : false
            })
        };
        return (
            <div className="privacyPolicy">
                <Typography>
                    This notice describes how medical information about you may be used and disclosed and 
                    how you can get access to this information.  Please review it carefully.
                </Typography>

            {/* Right to Notice */}
                <Accordion expanded={this.state.expanded === 'notice'} onChange={handleChange('notice')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="notice-content"
                        id="notice-header"
                    >
                        <Typography>Right to Notice</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            As a patient, you have the right to adequate notice of the uses and disclosures of 
                            your protected health information. Under the Health Insurance Portability and Accessibility Act (HIPAA), 
                            Everyday Eyecare can use your protected health information for treatment, payment and health care operations.<br/><br/>
                            a) Treatment - We may use or disclose your health information to a physician or other healthcare provider providing treatment to you.<br/>
                            b) Payment - We may use and disclose your health information to obtain payment for services we provide you.<br/>
                            c) Health care operations - We may use and disclose your health information in connection with our 
                            healthcare operations. Healthcare operations include quality assessment and improvement activities, 
                            reviewing the competency or qualifications of healthcare professionals, evaluating provider performance, 
                            conducting training programs, accreditation, certification, licensing or credentialing activities.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Your Authorization */}
                <Accordion expanded={this.state.expanded === 'authorization'} onChange={handleChange('authorization')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="authorization-content"
                        id="authorization-header"
                    >
                        <Typography>Your Authorization</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Most uses and disclosures that do not fall under treatment, payment, health care 
                            operations will require your written authorization. Upon signing, you may revoke 
                            your authorization (in writing) through our practice at any time.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Emergency Situations */}
                <Accordion expanded={this.state.expanded === 'emergency'} onChange={handleChange('emergency')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="emergency-content"
                        id="emergency-header"
                    >
                        <Typography>Emergency Situations</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            In the event of your incapacity or an emergency situation, we will disclose health information to a family 
                            member, or another person responsible for your care, using our professional judgment. We will only disclose 
                            health information that is directly relevant to the person's involvement in your healthcare.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Marketing */}
                <Accordion expanded={this.state.expanded === 'marketing'} onChange={handleChange('marketing')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="marketing-content"
                        id="marketing-header"
                    >
                        <Typography>Marketing</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            We will not use your health information for marketing communications without your written authorization.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Required by Law */}
                <Accordion expanded={this.state.expanded === 'law'} onChange={handleChange('law')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="law-content"
                        id="law-header"
                    >
                        <Typography>Required by Law</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            We may also use or disclose your health information when we are required to do so by law.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Abuse or Neglect */}
                <Accordion expanded={this.state.expanded === 'abuse'} onChange={handleChange('abuse')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="abuse-content"
                        id="abuse-header"
                    >
                        <Typography>Abuse or Neglect</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            We may disclose your health information to appropriate authorities if we reasonably believe that you are a 
                            possible victim of abuse, neglect, or domestic violence or the victim of other crimes. We may disclose your 
                            health information to the extent necessary to avert a serious threat to your or other people's health or safety.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* National Security */}
                <Accordion expanded={this.state.expanded === 'security'} onChange={handleChange('security')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="security-content"
                        id="security-header"
                    >
                        <Typography>National Security</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            We may disclose the health information of Armed Forces personnel to military authorities under certain circumstances. 
                            We may disclose health information to authorized federal officials required for lawful 
                            intelligence, counterintelligence, and other national security activities. We may disclose 
                            health information of inmates or patients to the appropriate authorities under certain circumstances.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Appointment Reminders */}
                <Accordion expanded={this.state.expanded === 'appoint'} onChange={handleChange('appoint')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="appoint-content"
                        id="appoint-header"
                    >
                        <Typography>Appointment Reminders</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            We may use or disclose your health information to provide you with appointment reminders via phone, e-mail, or letter.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Your Rights as a Patient */}
                <Accordion expanded={this.state.expanded === 'patient'} onChange={handleChange('patient')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="patient-content"
                        id="patient-header"
                    >
                        <Typography>Your Rights as a Patient</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            You have the right to restrict the disclosure of your protected health information (in writing). 
                            The request for restriction may be denied if the information is required for treatment, payment, or health care operations.<br/><br/>
                            -You have the right to receive confidential communications regarding your protected health information.<br/>
                            -You have the right to inspect and copy your protected health information.<br/>
                            -You have the right to amend your protected health information.<br/>
                            -You have the right to receive an account of disclosures of your protected health information.<br/>
                            -You have the right to a paper copy of this notice of privacy practices.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Legal Requirements */}
                <Accordion expanded={this.state.expanded === 'legal'} onChange={handleChange('legal')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="legal-content"
                        id="legal-header"
                    >
                        <Typography>Legal Requirements</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Everyday Eyecare is required by law to maintain the privacy of your protected health information. 
                            We are required to abide by the terms of this notice as it is currently stated, and reserve the right to change this notice. 
                            The policies in any new notice will not be in effect until they are posted to this site, or are available within our office.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Complaints */}
                <Accordion expanded={this.state.expanded === 'complaint'} onChange={handleChange('complaint')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="complaint-content"
                        id="complaint-header"
                    >
                        <Typography>Complaints</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            If you have complaints regarding the way your protected health information was handled, 
                            you may submit a complaint in writing to our office. You will not be retaliated against in any manner for a complaint.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    }
}

export default privacyPolicy