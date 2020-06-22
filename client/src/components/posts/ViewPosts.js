import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import { getPosts } from '../../actions/post';

const ViewPosts = ({ getPosts, post: { posts, loading}}) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return loading ?( <Spinner/> ): ( <Fragment>
        <h2 className="large text-primary"> View Complaints </h2>
        <br/>
            <div className="posts">
                {posts.map(post =>(
                    <PostItem key={post._id} post={post}/>
                ))}
            </div>
    </Fragment>)
};

ViewPosts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, {getPosts})(ViewPosts);
