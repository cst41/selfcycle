import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
    if(isAuthenticated){
        return <Redirect to='/dashboard'/>;
    }
    
    return(
        <section className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                <h1 className='x-large'>Welcome to Self Cycle </h1>
                <p className='lead'>
                    Your smart solution for your waste management.<br/>
                    A smart reward based recycling solution that is hassle free and rewarding. <br />
                </p>
                <div className="buttons">
                    <Link to='/register' class='btn btn-primary'>Sign Up</Link>
                    <Link to='/login' class='btn btn-light'>Login</Link>
                </div>
                </div>
            </div>
        </section>
    );
};

Landing.propTypes ={
    isAuthenticated: PropTypes.bool
}

const mapStateToPrps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToPrps)(Landing);