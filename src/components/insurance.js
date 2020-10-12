import React, { Component } from 'react';

//material ui components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class insurance extends Component {
    render() {
        return (
            <div className="insurance">
                <h1>Insurance Plans</h1>
                <p>
                    Please contact Everyday Eyecare if you are not sure what vision benefits you have or if your insurance 
                    is not shown on the list. We will be glad to do the research and advise you on your vision benefits.
                </p>
                <Grid container>
                    <Grid item sm={6} xs={12}>
                        <Card className="contact-card">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Medical
                                </Typography>
                                <Typography>Aetna</Typography>
                                <Typography>Blue cross blue shield</Typography>
                                <Typography>Cigna</Typography>
                                <Typography>Tricare</Typography>
                                <Typography>United Healthcare</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Card className="contact-card">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Vision
                                </Typography>
                                <Typography>Davis Vision</Typography>
                                <Typography>Eyemed</Typography>
                                <Typography>Spectera</Typography>
                                <Typography>VSP</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default insurance