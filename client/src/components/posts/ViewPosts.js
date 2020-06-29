import React, { Component, Fragment, useEffect, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import { getPosts } from '../../actions/post';
import {Redirect} from 'react-router-dom';


const ViewPosts = ({ 
    
    getPosts, 
    post: { posts, loading}, userLevel}) => {

    let filter = 0;

    useEffect(() => {
        getPosts();
    }, [getPosts]);
    
    const something = () => {
        

        // const something = () => {
        //     let testarr = posts;
        //     console.log(1);
        //     testarr = posts.map(post => {
        //         if( post.issues === "Hardware Issue" && hardwareIssue === true)
        //         {
        //             return post;
        //         }
    
        //         else if(post.issues === "Software Issue" && softwareIssue === true)
        //         {
        //             return (
        //                 <PostItem key={post._id} post={post}/>
        //             )
        //         }
    
        //         else if(post.issues === "Customer Service Issue" && csIssue === true)
        //         {
        //             return (
        //                 <PostItem key={post._id} post={post}/>
        //             )
        //         }
    
        //         else if(post.issues === "Payment Issue" && payIssue === true)
        //         {
        //             return (
        //                 <PostItem key={post._id} post={post}/>
        //             )
        //         }
    
        //         else if(post.issues === "Other Issue" && othersIssue === true)
        //         {
        //             return (
        //                 <PostItem key={post._id} post={post}/>
        //             )
        //         }
        // });
    };

    let hardwareIssue = true, softwareIssue, csIssue, payIssue, othersIssue = false;

    const findComplaints = (e) => {
        //console.log(e.target.checked);
        let testarr = posts;
    }

    return (userLevel !== 3 ? <Redirect to='/dashboard' /> : loading ?( <Spinner/> ): ( <Fragment>
        <h2 className="large text-primary"> View Complaints </h2> <br/>
           
        <div>
                <input type="checkbox" id="1"
                onChange={e => findComplaints(e)}/> <b> Hardware Issue | </b>
                
                <input type="checkbox" id="2" 
                onChange={e => findComplaints(e)}/> <b> Software Issue | </b>
                
                <input type="checkbox" id="3"
                onChange={e => findComplaints(e)}/> <b> Customer Service Issue | </b> 
                
                <input type="checkbox" id="4"
                onChange={e => findComplaints(e)}/>  <b> Payment Issue |</b>
                
                <input type="checkbox" id="5"
                onChange={e => findComplaints(e)}/>  <b> Others Issue </b> 

        </div>

         <div className="posts">
            <PostItem 
        </div>
    </Fragment>))
};

ViewPosts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post,
    userLevel: state.auth.user.userLevel
});

export default connect(mapStateToProps, {getPosts})(ViewPosts);
