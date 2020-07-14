import React, { Component } from 'react';

//Material UI
import Grid from '@material-ui/core/Grid';

class insurance extends Component {
    render() {
        return (
            <div className="insurance">
                <h1>The Insurances That We Accept</h1>
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