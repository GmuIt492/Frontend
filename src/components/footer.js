import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//material ui components
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'

class footer extends Component {
    render() {
        return (
            <div className="footer">
                <Grid item xs={12}>
                    <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={4}>
                                <Box p={2}>
                                    <Button color="secondary" component={Link} to="/privacyPolicy"><h4>Privacy Policy</h4></Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box p={2}>
                                    <Button color="secondary" component={Link} to="/contact"><h4>Contact</h4></Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box p={2}>
                                    <Button color="secondary" component={Link} to="/termCondition"><h4>Terms &amp; Conditions</h4></Button>
                                </Box>
                            </Grid>
                        </Grid>
                        © 2020 Everyday Eyecare, Inc. All rights reserved.
                    </Box>
                </Grid>
            </div>
        )
    }
}

export default footer