import React, { Component } from 'react'
import PropTypes from 'prop-types';

//redux components
import { connect } from 'react-redux';
import { getHeaderNotif } from '../redux/actions/dataActions'; 

class headerNotif extends Component {
    //get header notifcation
    componentDidMount() {
        this.props.getHeaderNotif();
    }

    //render header notifcation page
    render() {
        //initialize header notification
        var headerMarkup = 'Loading...';
        var headerPopup = false;

        //get header array
        const{ header } = this.props.data;

        //process hours of operation string
        if (typeof header !== 'undefined' && header.length> 0) {
            headerMarkup = header[0].body;
            headerPopup = true;
        }
        
        //show popup if true
        var changePopup = headerPopup === false ? "none" : "";
        return (
            <div className="header-notif" style={{display:changePopup}}>
                <span dangerouslySetInnerHTML={{ __html: headerMarkup }}></span>
            </div>
        )
    }
}

//checks prop types for posts
headerNotif.propTypes = {
    getHeaderNotif: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

//map post state to global props
const mapStateToProps = (state) => ({
    data: state.data
});

//actions used
const mapActionsToProps = {
    getHeaderNotif
}

export default connect(mapStateToProps,mapActionsToProps)(headerNotif);