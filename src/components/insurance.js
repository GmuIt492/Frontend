import React, { Component } from 'react';

//material ui components
import Grid from '@material-ui/core/Grid';

//logo img
import rudy from '../assets/img/rudy_project_logo.png';
import eschenbach from '../assets/img/eschenbach_logo.png';

class insurance extends Component {
    render() {
        return (
            <div className="insurance">
                <h1>Eyecare Partners</h1>
                <p>
                    Eyewear is the most important item in our wardrobe that many of us overlook. 
                    It is the reason why Everyday Eyecare works with several well-known eyewear vendors to 
                    provide you with choices and options. With excellent style and awesome variety, you have 
                    no problem to select the perfect eyewear from our wide range of brand names and products 
                    which complement your lifestyle for all occasions and budgets.
                </p>
                <Grid container>
                    <Grid item sm={2} xs={12}>
                        <p>
                            <a href="https://www.rudyprojectna.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img className="partnerLogo" src={rudy} alt="rudy project"/>
                            </a>
                        </p>
                    </Grid>
                    <Grid item sm={2} xs={12}>
                        <p>
                            <a href="https://www.eschenbach.com//"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img className="partnerLogo" src={eschenbach} alt="eschenbach"/>
                            </a>
                        </p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sm={2} xs={12}>
                        <p>Insurance 1</p>
                    </Grid>
                    <Grid item sm={2} xs={12}>
                        <p>Insurance 2</p>
                    </Grid>
                    <Grid item sm={2} xs={12}>
                        <p>Insurance 3</p>
                    </Grid>
                    <Grid item sm={2} xs={12}>
                        <p>Insurance 4</p>
                    </Grid>
                    <Grid item sm={2} xs={12}>
                        <p>Insurance 5</p>
                    </Grid>
                    <Grid item sm={2} xs={12}>
                        <p>Insurance 6</p>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default insurance