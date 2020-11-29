import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

//material ui form components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

//redux components
import { connect } from 'react-redux';
import { loginUser,verifyUser } from '../redux/actions/userActions'; 

//css
const styles = {
    form: {
        textAlign: 'center',
        padding: 25
    },
    formVerify: {
        textAlign: 'center'
    },
    textField: {
        margin: '10px auto 10px auto'
    },
    button: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        position: 'relative'
    },
    progress: {
        position: 'absolute'
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
    }
}

//login rendering
class login extends Component {
    //default fields
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    //get props for validation
    componentWillReceiveProps(nextProps) {
        if(nextProps.UI.errors) {
            this.setState({ errors: nextProps.UI.errors });
        }
    }

    //redirect after authentication on submit
    handleSubmit = (event) => {
        event.preventDefault();
        //login fields for userData object
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        //logs in and returns success
        this.props.loginUser(userData);
    }

    //check verification code
    handleVerify = (event) => {
        event.preventDefault();
        //login fields for userData object
        const verifyData = {
            email: this.state.email,
            code: this.state.verifyCode
        };
        //logs in and returns token
        this.props.verifyUser(verifyData);
    }

    //targets form field and allows change of target value
    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    //render login page
    render() {
        //bring prop styles and login status from user
        const { classes,UI: { loading },user } = this.props;

        //verification code field after valid login
        let showVerifyField = user.status === true ? "" : "none";

        //bring errors and load state
        const { errors} = this.state;

        //actual redirection
        if (this.props.user.authenticated === true) {
            this.props.history.go(-1);
        }
        return (
            <div className="login">
                <Grid container className={classes.form}>
                    <Grid item sm/>
                    <Grid item sm>
                        {/*login form*/}
                        <form noValidate onSubmit={this.handleSubmit}>
                            <TextField id="email"
                                name="email"
                                type="email"
                                label="Email"
                                className={classes.textField}
                                helperText={errors.email}
                                //display null email error
                                error={errors.email ? true : false}
                                value={this.state.email}
                                onChange={this.handleChange}
                                fullWidth/>
                            <TextField id="password"
                                name="password"
                                type="password"
                                label="Password"
                                className={classes.textField}
                                //display null password error
                                helperText={errors.password}
                                error={errors.password ? true : false}
                                value={this.state.password}
                                onChange={this.handleChange}
                                fullWidth/>
                            {errors.general && (
                                //display wrong credential error
                                <Typography variant="body2" className={classes.customError}>
                                    {errors.general}
                                </Typography>
                            )}
                            <Button type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                disabled={loading}>
                                    Login
                                    {loading && (
                                        //progress icon
                                        <CircularProgress size={30} className={classes.progress}/>
                                    )}
                            </Button>
                        </form>
                    </Grid>
                    <Grid item sm/>
                </Grid>
                <Grid container className={classes.formVerify} style={{display:showVerifyField}}>
                    <Grid item sm/>
                    <Grid item sm>
                        {/*login form*/}
                        <form noValidate onSubmit={this.handleVerify}>
                            <TextField id="verifyCode"
                                name="verifyCode"
                                type="verifyCode"
                                label="Verify Code"
                                className={classes.textField}
                                value={this.state.verifyCode}
                                onChange={this.handleChange}
                                fullWidth
                                required/>
                            <Button type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                disabled={loading}>
                                    Verify
                                    {loading && (
                                        //progress icon
                                        <CircularProgress size={30} className={classes.progress}/>
                                    )}
                            </Button>
                        </form>
                    </Grid>
                    <Grid item sm/>
                </Grid>
            </div>
        );
    }
}

//checks prop types for login
login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    verifyUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}

//map login state to global props
const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

//actions used
const mapActionsToProps = {
    loginUser,
    verifyUser
}

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(login));