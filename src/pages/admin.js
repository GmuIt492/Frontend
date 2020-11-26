import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

//material ui components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//import components
import Post from '../components/post';

//redux components
import { connect } from 'react-redux';
import { getFeedbacks } from '../redux/actions/dataActions';

const styles = {
    submitButton: {
        position: 'relative',
        padding: 10
    },
    progressSpinner: {
        position: 'absolute'
    },
    closeButton: {
        position: 'relative',
        left: '90%',
        top: '10%'
    }
}

class admin extends Component {
    //initialize state variables
    state = {
        open:false,
        body: '',
        errors: {}
    };
    
    //get feedback
    componentDidMount() {
        this.props.getFeedbacks();
    }

    //render admin
    render() {
        //get feedback array
        const{ posts,loading } = this.props.data;

        //checks if feedback exist and loaded
        let recentPostMarkup = !loading ? (
            //renders all post from Post component
            posts.map((post) => <Post key={post.feedbackId} post={post}/>)
        ) : <p>Loading...</p>

        //initialize
        const { errors } = this.state;
        const {
            classes
        } = this.props;
        return (
            <>
                <div className="admin">
                    <h1 className="admin-title">Edit Pages<br/>(Html Allowed)</h1>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} className="admin-title">
                            <Card className="edit-card">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Home: Notification
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        <form onSubmit={this.handleSubmit}>
                                            <TextField
                                                name="body"
                                                type="text"
                                                multiline
                                                rows="4"
                                                placeholder="Everyday Eyecare Is The Best!"
                                                error={errors.body ? true : false}
                                                helperText={errors.body}
                                                className={classes.textField}
                                                onChange={this.handleChange}
                                                fullWidth
                                            />
                                            <br/><br/>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                className={classes.submitButton} disabled={loading}
                                            >
                                                <h4>Send Feedback</h4>
                                                {loading && (
                                                    <CircularProgress size={30} className={classes.progressSpinner}/>
                                                )}
                                            </Button>
                                        </form>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} className="admin-title">
                            <Card className="edit-card">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Contact: Hours Of Operation
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Phone: <a href="tel:7037642015">703.764.2015</a>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <hr/>
                    <h1 className="admin-title">Feedback</h1>
                    <br/><br/>
                    <div>
                        <Grid container spacing={1}>
                            {recentPostMarkup}
                        </Grid>
                    </div>
                </div>
            </>
        );
    }
}

//checks prop types for posts
admin.propTypes = {
    getFeedbacks: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

//map post state to global props
const mapStateToProps = (state) => ({
    data: state.data
});

//actions used
const mapActionsToProps = {
    getFeedbacks
}

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(admin));