import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relatativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';

//material ui card components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//redux components
import { connect } from 'react-redux';

const styles = {
    card: {
        position: 'relative',
        display: 'flex',
        margin: 'auto',
        marginBottom: 50,
        backgroundColor: '#DDD'
    },
    image: {
        minWidth: 200
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    }
}

class post extends Component {
    render() {
        dayjs.extend(relatativeTime);
        //extract fields from post
        const { classes,
            post:{
                body,
                createdAt,
                userHandle,
                postId
            }
         } = this.props;
        return (
            //card rendering
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography
                        variant="h5"
                        component={Link}
                        to={`/users/${userHandle}`}
                        color="primary">
                        {userHandle}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary">
                            {dayjs(createdAt).fromNow()}
                    </Typography>
                    <Typography
                        variant="body1">
                        {body}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

//checks prop types for posts
post.propTypes = {
    user: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

//map post state to global props
const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(post));