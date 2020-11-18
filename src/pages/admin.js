import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

//import components
import Post from '../components/post';

//redux components
import { connect } from 'react-redux';
import { getFeedbacks } from '../redux/actions/dataActions'; 

class admin extends Component {
    //get feedback
    componentDidMount() {
        this.props.getFeedbacks();
    }

    //render admin
    render() {
        const{ posts,loading } = this.props.data;
        //checks if posts exist and loaded
        let recentPostMarkup = !loading ? (
            //renders all post from Post component
            posts.map((post) => <Post key={post.postId} post={post}/>)
        ) : <p>Loading...</p>
        return (
            <>
                <div className="admin">
                    <h1 className="feedbackTitle">Feedback</h1>
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

export default connect(mapStateToProps,mapActionsToProps)(admin);