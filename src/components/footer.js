import React, { Component } from 'react'

//Material UI
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

class footer extends Component {
    render() {
        return (
            <div className="footer">
                <Grid item xs={12}>
                    <Box bgcolor="primary.main" color="primary" p={2}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={4}>
                                <Box p={2}>
                                    Privacy Policy
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box p={2}>
                                    Contact
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box p={2}>
                                    Terms &amp; Conditions 
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </div>
        )
    }
}

export default footer