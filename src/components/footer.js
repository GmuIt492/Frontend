import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//Material UI
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
                                    <Button color="secondary" component={Link} to="/privacyPolicy">Privacy Policy</Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box p={2}>
                                    Contact
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box p={2}>
                                    <Button color="secondary" component={Link} to="/termCondition">Terms &amp; Conditions</Button>
                                </Box>
                            </Grid>
                        </Grid>
                        © 2007 Everyday Eyecare, Inc. All rights reserved.
                    </Box>
                </Grid>
            </div>
        )
    }
}

export default footer