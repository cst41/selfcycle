import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles} from '../../actions/profile';
import {Redirect} from 'react-router-dom';

const Profiles = ({ 
    getProfiles, 
    profile: { profiles, loading },
    userLevel
}) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    return(userLevel !== 3 ? <Redirect to="/dashboard" /> : <Fragment>
        {
            loading ? <Spinner />: <Fragment>
                <h1 className="large text-primary"> Customers </h1>
                <p className="lead">
                    View Customers
                </p>
                <div className="profiles">
                    {profiles.length > 0 ? (
                        profiles.map(profile => (
                            <ProfileItem key = { profile._id} profile={profile} />
                        ))
                    ) :<h4> No customers' profiles found...</h4>}
                </div> 
                </Fragment>
        }
        </Fragment>
    );
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    userLevel: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    userLevel: state.auth.user.userLvel
})

export default connect(mapStateToProps, {getProfiles})(Profiles);
