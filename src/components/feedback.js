import React, { Component } from 'react';
import PropTypes from 'prop-types';

//material ui components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';

//redux
import { connect } from 'react-redux';
import { feedbackAction } from '../redux/actions/dataActions';

//material ui icons
import CloseIcon from '@material-ui/icons/Close';

class feedback extends Component{
    state = {
        open:false,
        body: '',
        errors: {}
    };
    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({
                errors: nextProps.UI.errors
            });
        };
        if(!nextProps.UI.errors){
            this.setState({ body: '' });
            this.handleClose();
        }
    };
    handleOpen = () => {
        this.setState({ open: true })
    };
    handleClose = () => {
        this.setState({ open: false, errors:{} })
    };
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.feedbackAction({ body: this.state.body })
    }
    render(){
        const { errors } = this.state;
        const {
            classes
        } = this.props;
        return (
            <>
                <Button color="secondary" onClick={this.handleOpen} tip='Post'>
                    <h4>Post</h4>
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth maxWidth="sm"
                >
                    <Button
                        tip="Close"
                        onClick={this.handleClose}
                        className="closeButton"
                    >
                        <CloseIcon/>
                    </Button>
                    <h3 className="feedbackTitle">Leave An Opinion Or Anything About Your Experience!</h3>
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
                                onChange={this.handleChange}
                                fullWidth
                            />
                            <br/><br/>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="submitButton"
                            >
                                Send Feedback
                                {(
                                    <CircularProgress size={30} className="progressSpinner"/>
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

export default connect(mapStateToProps,{feedbackAction})(feedback)