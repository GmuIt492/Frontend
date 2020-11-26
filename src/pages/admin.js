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
import { headerNotifAction,deleteHeaderNotifAction,hoursAction,getFeedbacks } from '../redux/actions/dataActions';

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

    //listen for edit change
    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({
                errors: nextProps.UI.errors
            });
        };
        if (!nextProps.UI.errors && !nextProps.UI.loading) {
            this.setState({ body: '' });
        };
    };

    //on edit content change
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    //create / update header notification
    handleHeaderNotif = (event) => {
        event.preventDefault();
        this.props.headerNotifAction({ body: this.state.body });
    }

    //delete header notification
    handleHeaderNotifDelete = (event) => {
        this.props.deleteHeaderNotifAction();
    }

    //update hours of operation
    handleHoursOfOp = (event) => {
        event.preventDefault();
        this.props.hoursAction({ body: this.state.body });
    }

    //render admin
    render() {
        //get feedback array
        const{ posts } = this.props.data;

        //initialize
        const { errors } = this.state;
        const { classes,UI: { loading } } = this.props;

        //checks if feedback exist and loaded
        let recentPostMarkup = <p>Loading...</p>;
        if (typeof posts !== 'undefined' && posts.length> 0) {
            recentPostMarkup = posts.map((post) => <Post key={post.feedbackId} post={post}/>);
        }
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
                                    <Typography variant="body2" component="div">
                                        <form onSubmit={this.handleHeaderNotif}>
                                            <TextField
                                                name="body"
                                                type="text"
                                                multiline
                                                rows="4"
                                                placeholder="Everyday Eyecare Office Hours On<br/>Friday, January 1, 2021<br/> will be from 10am to 4pm est"
                                                // error={errors.body ? true : false}
                                                // helperText={errors.body}
                                                className={classes.textField}
                                                onChange={this.handleChange}
                                                fullWidth
                                                required
                                            />
                                            <br/><br/>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                className={classes.submitButton}
                                                // disabled={loading}
                                            >
                                                <h4>Create / Update</h4>
                                                {loading && (
                                                    <CircularProgress size={30} className={classes.progressSpinner}/>
                                                )}
                                            </Button>
                                            &nbsp;&nbsp;
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                className={classes.submitButton}
                                                // disabled={loading}
                                                onClick={this.handleHeaderNotifDelete}
                                            >
                                                <h4>Delete</h4>
                                                {/* {loading && (
                                                    <CircularProgress size={30} className={classes.progressSpinner}/>
                                                )} */}
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
                                    <Typography variant="body2" component="div">
                                        <form onSubmit={this.handleHoursOfOp}>
                                            <TextField
                                                name="body"
                                                type="text"
                                                multiline
                                                rows="4"
                                                placeholder="Monday - Friday: 10am - 5pm est<br/>Saturday - Sunday: Closed"
                                                // error={errors.body ? true : false}
                                                // helperText={errors.body}
                                                className={classes.textField}
                                                onChange={this.handleChange}
                                                fullWidth
                                                required
                                            />
                                            <br/><br/>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                className={classes.submitButton}
                                                // disabled={loading}
                                            >
                                                <h4>Update</h4>
                                                {/* {loading && (
                                                    <CircularProgress size={30} className={classes.progressSpinner}/>
                                                )} */}
                                            </Button>
                                        </form>
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
    headerNotifAction: PropTypes.func.isRequired,
    deleteHeaderNotifAction: PropTypes.func.isRequired,
    hoursAction: PropTypes.func.isRequired,
    getFeedbacks: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}

//map post state to global props
const mapStateToProps = (state) => ({
    data: state.data,
    UI: state.UI
});

//actions used
const mapActionsToProps = {
    headerNotifAction,
    deleteHeaderNotifAction,
    hoursAction,
    getFeedbacks,
}

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(admin));