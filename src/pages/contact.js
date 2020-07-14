import React, { Component } from 'react'

//Material UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class contact extends Component {
    render() {
        return (
            <div className="contact">
                <h1 style={{textAlign:"center"}}>Contact</h1>
                <p>Customer Service is our passion. It is what we do. It is how we make decisions. We constantly strive to exceed expectations. Everyday Eyecare will pleasantly take care of you and your vision needs. Your experience with Everyday Eyecare is our top priority. To that end, we would be delighted to hear from you. You can contact us using any of the following methods:</p>
                <Grid container>
                    <Grid item sm={4} xs={12}>
                        <Card className="contact-card">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                Word of the Day
                                </Typography>
                                <Typography variant="h5" component="h2">
                                Hello
                                </Typography>
                                <Typography color="textSecondary">
                                adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card className="contact-card">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                Word of the Day
                                </Typography>
                                <Typography variant="h5" component="h2">
                                Hello
                                </Typography>
                                <Typography color="textSecondary">
                                adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card className="contact-card">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Standard Mail
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    Everyday Eyecare, Inc.
                                </Typography>
                                <Typography variant="body2" component="p">
                                    <a href="https://goo.gl/maps/kTNDhdWhueNsrtxR9"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        5203-A Lyngate Court Burke, VA 22015
                                    </a>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default contact