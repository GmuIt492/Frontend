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
import { loginUser } from '../redux/actions/userActions'; 

//css
const styles = {
    form: {
        textAlign: 'center',
        padding: 25
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
        this.state ={
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

    //redirect after submit
    handleSubmit = (event) => {
        event.preventDefault();
        //login fields for userData object
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        //logs in and returns token
        this.props.loginUser(userData);

        //actual redirection
        this.props.history.go(-1);
    }

    //targets form field and allows change of target value
    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    //render login page
    render() {
        //bring prop styles
        const { classes,UI: { loading } } = this.props;
        //bring errors and load state
        const { errors} = this.state;
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
            </div>
        );
    }
}

//checks prop types for login
login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
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
    loginUser
}

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(login));