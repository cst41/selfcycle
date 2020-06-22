import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';


const ViewProfile = ({ 
        profile: {profile, loading},
        getCurrentProfile
    }) => {

    useEffect(() => {
        getCurrentProfile();

    } , [getCurrentProfile]);
    
    return loading && profile === null ? (<Spinner/>): 
    (
        <Fragment>
        <h2 class="large text-primary"> My Profile</h2>
        <p class="lead">
            <i class="fas fa-user"></i>
        </p>

        <table className="table">
                <tbody>
                    <tr>
                        {/*<tr> <b> Email Address : </b> {  user && user.email }</tr>*/}
                        <tr  className="hide-sm"> <b> Date of Birth : </b>  <Moment format='DD/MM/YYYY'>{ profile.dob}</Moment> </tr>
                        <tr  className="hide-sm"> <b> Phone Number :  </b>  { profile.phonenum }</tr>
                        <tr  className="hide-sm"> <b> House Address : </b>  { profile.houseadd }</tr>
                    </tr>
                </tbody>
        </table> <br/><br/><br/><br/><br/>
        <Link className="btn btn-light my-1"to="/dashboard">Go Back</Link>
      
    </Fragment>
    )
}

ViewProfile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(
    mapStateToProps, 
    { getCurrentProfile})
    (withRouter(ViewProfile)
);
