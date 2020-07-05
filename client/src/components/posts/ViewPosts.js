import React, {Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import { getPosts } from '../../actions/post';
import {Redirect} from 'react-router-dom';


const ViewPosts = ({ 
    
    getPosts, 
    post: { posts, loading}, userLevel}) => {

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
    
    const findComplaints = (e) => {
        if(e.target.id === "1") {
            setValue({...checkboxData, hardware: !checkboxData.hardware});
        } else if(e.target.id === "2" ) {
            setValue({...checkboxData, software: !checkboxData.software});
        } else if(e.target.id === "3") {
            setValue({...checkboxData, customer: !checkboxData.customer});
        } else if(e.target.id === "4") {
            setValue({...checkboxData, payment: !checkboxData.payment});
        } else if(e.target.id === "5") {
            setValue({...checkboxData, others: !checkboxData.others});
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
