import React, { Component } from 'react'

//material ui components
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class service extends Component {
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
            <div className="service">
                <p><Typography>
                    Everyday Eyecare provides you with an experienced and comprehensive approach to eye care in a comfortable and caring environment. 
                    We offer a wide range of services that go beyond what you would expect from a conventional optometric practice. 
                    Listed below are some of the most common products and services that Everyday Eyecare offers to our patients. 
                    If you don't see the information you are looking for here, please contact the office for assistance.
                </Typography></p>

            {/* Pediatric and Family Eye Care */}
                <Accordion expanded={this.state.expanded === 'pediatric'} onChange={handleChange('pediatric')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="pediatric-content"
                        id="pediatric-header"
                    >
                        <Typography>Pediatric and Family Eye Care</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Keep your eyes healthy. Regular eye exams can detect glaucoma, hypertension and diabetes - not to mention poor vision. 
                            Children should have their eyes examined at least by the time they enter school, if not sooner. 
                            According to the Vision Council of America, 1 in 4 children has a vision problem; 1 in 3 seniors has a vision-impairing eye disease; 
                            and baby boomers are at a greater risk for developing glaucoma than their parent’s generation.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Comprehensive Eye Exam */}
                <Accordion expanded={this.state.expanded === 'eyeExam'} onChange={handleChange('eyeExam')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="eyeExam-content"
                        id="eyeExam-header"
                    >
                        <Typography>Comprehensive Eye Exam</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Including refraction, eye coordination, depth perception, peripheral vision, color vision, glaucoma test, cataract evaluation, and health evaluation. 
                            A yearly exam is recommended for all patients, especially those wearing eyeglasses or contact lenses. 
                            A dilated eye exam is essential for patients with diabetes, glaucoma, or other eye conditions and diseases.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Contact Lens Exam */}
                <Accordion expanded={this.state.expanded === 'lensExam'} onChange={handleChange('lensExam')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="lensExam-content"
                        id="lensExam-header"
                    >
                        <Typography>Contact Lens Exam</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            The contact lens exam ensures proper fit of your contacts and evaluates your vision with the contacts. 
                            The doctors at Everyday Eyecare perform all types of contact lens exams and fittings, 
                            including astigmatic, bifocal, soft, rigid gas permeable, disposable, frequent replacement, and conventional lenses.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Contact Lenses */}
                <Accordion expanded={this.state.expanded === 'lense'} onChange={handleChange('lense')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="lense-content"
                        id="lense-header"
                    >
                        <Typography>Contact Lenses</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Everyday Eyecare carries many contact brands and products so you can find lenses that fit properly on your eyes for comfort and safety. 
                            Contact lenses offer certain advantages when compared to eyeglasses - 
                            they offer good peripheral vision, fit well with an active lifestyle, and allow your eyes to be seen and admired!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Eyeglasses */}
                <Accordion expanded={this.state.expanded === 'eyeglasses'} onChange={handleChange('eyeglasses')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="eyeglasses-content"
                        id="eyeglasses-header"
                    >
                        <Typography>Eyeglasses</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Everyday Eyecare carries a large selection of designer eyewear styles to complement your lifestyle for all occasions and budgets. 
                            Designer frames include Calvin Klein, Ralph Lauren, Polo, Liz Claiborne, Fendi, Silhouette, Giorgio Armani, Christian Dior, Gucci and many more. 
                            We also have the latest innovations in frame and lens materials, treatments and designs 
                            including high index lenses, multifocal and progressive lenses to make your eyewear more attractive and longer lasting.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Co-Management of LASIK */}
                <Accordion expanded={this.state.expanded === 'lasik'} onChange={handleChange('lasik')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="lasik-content"
                        id="lasik-header"
                    >
                        <Typography>Co-Management of LASIK</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            It's the procedure everyone is talking about. Learn more about LASIK, and find out if this advanced procedure is right for you. 
                            The doctors at Everyday Eyecare can pre-screen you, refer you to the area's surgeon doctors, and complete all of your post-procedure exams.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Computer Vision Syndrome Eyewear */}
                <Accordion expanded={this.state.expanded === 'computerVision'} onChange={handleChange('computerVision')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="computerVision-content"
                        id="computerVision-header"
                    >
                        <Typography>Computer Vision Syndrome Eyewear</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            More than 70 million Americans use a computer both at work and at home which may lead to eyestrain, headaches, dry eyes, fatigue, blurred vision or burning sensation. 
                            There are ways we can help to make your time in front of the computer more pleasant. 
                            Everyday Eyecare's doctors will be happy to evaluate your eyes and prescribe a specialty lens that can alleviate your computer-based discomfort.   
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Treatment of Eye Diseases */}
                <Accordion expanded={this.state.expanded === 'disease'} onChange={handleChange('disease')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="disease-content"
                        id="disease-header"
                    >
                        <Typography>Treatment of Eye Diseases</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Everyday Eyecare’s doctors are medically certified to treat a variety of eye conditions 
                            including eye infections, injuries, inflammations, foreign bodies, and glaucoma. 
                            Our doctors are continually trained and educated on the latest 
                            medical developments, diagnosis and treatment of ocular diseases and injuries.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Co-Management of Cataracts */}
                <Accordion expanded={this.state.expanded === 'cataracts'} onChange={handleChange('cataracts')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="cataracts-content"
                        id="cataracts-header"
                    >
                        <Typography>Co-Management of Cataracts</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Everyday Eyecare’s doctors can evaluate and advise you about various procedures and recommend a surgical specialist for you. 
                        We can see you in the weeks following surgery to give you personal attention and carefully monitor your progress.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Treatment of Dry Eyes */}
                <Accordion expanded={this.state.expanded === 'dryEyes'} onChange={handleChange('dryEyes')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="dryEyes-content"
                        id="dryEyes-header"
                    >
                        <Typography>Treatment of Dry Eyes</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lubricating drops are available as a first-line therapy. Now there is also punctual occlusion. 
                            This procedure allows your eyes to retain more of their own tears. 
                            It is a painless, non-invasive, and reversible procedure that uses a microscopic sterile plug to block the drainage of tears. 
                            Dry eye treatments lead to better comfort and improved overall eye health.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Treatment of Eye Allergies */}
                <Accordion expanded={this.state.expanded === 'allergies'} onChange={handleChange('allergies')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="allergies-content"
                        id="allergies-header"
                    >
                        <Typography>Treatment of Eye Allergies</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Do the changing seasons cause your eyes to be itchy, watery, or swollen? 
                            There are prescription eye drops available to reduce these symptoms in most cases. 
                            Let Everyday Eyecare’s professionals see if there is a treatment that is right for you.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            {/* Low Vision */}
                <Accordion expanded={this.state.expanded === 'lowVision'} onChange={handleChange('lowVision')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="lowVision-content"
                        id="lowVision-header"
                    >
                        <Typography>Low Vision</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Low vision can make even simple activities seem difficult. It can range from some vision impairment, 
                            such as tunnel vision or blind spots to legal blindness or almost total blindness. 
                            Everyday Eyecare's doctors can improve your vision. Many magnifiers, telescopes, and other low vision aids are available, 
                            such as the magnifying system that offers several color and contrast settings for various types of photographs and reading material.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    }
}

export default service