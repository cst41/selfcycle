import React, { Component, Fragment, useEffect, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import { getPosts } from '../../actions/post';
import {Redirect} from 'react-router-dom';
import { post } from 'request';


const ViewPosts = ({ 
    
    getPosts, 
    post: { posts, loading}, userLevel}) => {

    let filter = 0;

    const [checkboxData, setValue] = useState({
        leastOne: false,
        hardware: false,
        software: false,
        customer: false,
        payment: false,
        others: false
    });

    const refresh = () => {
        setValue({...checkboxData, leastOne: false, hardware: false, software: false, customer: false, payment: false, others: false});
    }

    useEffect( () => {
        getPosts();
        const boolval = checkboxData.hardware || checkboxData.software || checkboxData.customer || checkboxData.payment || checkboxData.others;
        setValue({...checkboxData, leastOne: boolval});
    }, [getPosts, checkboxData.hardware, checkboxData.software, checkboxData.payment, checkboxData.customer, checkboxData.others]);
    
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

    const findComplaints = (e) => {
        if(e.target.id === "1") {
            //hardwareIssue = !hardwareIssue;
            setValue({...checkboxData, hardware: !checkboxData.hardware});
            console.log("1");
        } else if(e.target.id === "2" ) {
            setValue({...checkboxData, software: !checkboxData.software});
            //softwareIssue = !softwareIssue;
        } else if(e.target.id === "3") {
            setValue({...checkboxData, customer: !checkboxData.customer});
            //csIssue = !csIssue;
        } else if(e.target.id === "4") {
            setValue({...checkboxData, payment: !checkboxData.payment});
            //payIssue = !payIssue;
        } else if(e.target.id === "5") {
            setValue({...checkboxData, others: !checkboxData.others});
           //othersIssue = !othersIssue;
        }
    }

    return (userLevel !== 3 ? <Redirect to='/dashboard' /> : loading ?( <Spinner/> ): ( <Fragment>
        <h2 className="large text-primary"> View Complaints </h2> <br/>
           
        <div>
                <input type="checkbox" id="1"
                onChange={e => findComplaints(e)} checked={checkboxData.hardware}/> <b> Hardware Issue | </b>
                
                <input type="checkbox" id="2" 
                onChange={e => findComplaints(e)} checked={checkboxData.software}/> <b> Software Issue | </b>
                
                <input type="checkbox" id="3"
                onChange={e => findComplaints(e)} checked={checkboxData.customer}/> <b> Customer Service Issue | </b> 
                
                <input type="checkbox" id="4"
                onChange={e => findComplaints(e)} checked={checkboxData.payment}/>  <b> Payment Issue |</b>
                
                <input type="checkbox" id="5"
                onChange={e => findComplaints(e)} checked={checkboxData.others}/>  <b> Others Issue </b> 

        </div>

         <div className="posts">
            {posts.map(post => ( checkboxData.leastOne === true ?
                ((post.issues === "Hardware Issue" && checkboxData.hardware) ||
                (post.issues === "Software Issue" && checkboxData.software) ||
                (post.issues === "Customer Service Issue" && checkboxData.customer) ||
                (post.issues === "Payment Issue" && checkboxData.payment) ||
                (post.issues === "Other Issue" && checkboxData.others) ?
                <PostItem key={post._id} post={post}/> :  null) :
                <PostItem key={post._id} post={post}/>
            ))}
        </div>
        <button onClick={refresh}>Refresh</button>
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
