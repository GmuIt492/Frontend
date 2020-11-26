import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

//material ui components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';

//redux
import { connect } from 'react-redux';
import { feedbackAction } from '../redux/actions/dataActions';

//icons
import CloseIcon from '@material-ui/icons/Close';

//css
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

class feedback extends Component{
    //initialize state variables
    state = {
        open:false,
        body: '',
        errors: {}
    };

    //listen for feedback change
    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({
                errors: nextProps.UI.errors
            });
        };
        if (!nextProps.UI.errors && !nextProps.UI.loading) {
            this.setState({ body: '' });
            this.handleClose();
        };
    };

    //on feedback popup open
    handleOpen = () => {
        this.setState({ open: true })
    };

    //on feedback popup close
    handleClose = () => {
        this.setState({ open: false, errors:{} });
    };

    //on feedback content change
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    //on feedback content submit
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.feedbackAction({ body: this.state.body });
    }

    //render feedback popup
    render() {
        const { errors } = this.state;
        const {
            classes,
            UI: { loading }
        } = this.props;
        return (
            <>
                <Button color="secondary" onClick={this.handleOpen} tip='Post'>
                    <h4>Feedback</h4>
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth maxWidth="sm"
                >
                    <Button
                        tip="Close"
                        onClick={this.handleClose}
                        tipclassname={classes.closeButton}
                    >
                        <CloseIcon/>
                    </Button>
                    <h3 className="feedback-title">Leave An Opinion Or Anything About Your Experience!</h3>
                    <DialogContent>
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
                    </DialogContent>
                </Dialog>
            </>
        )
    }
}

feedback.propTypes = {
    feedbackAction: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    UI: state.UI
})

export default connect(mapStateToProps,{ feedbackAction })(withStyles(styles)(feedback))