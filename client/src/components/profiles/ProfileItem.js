import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const ProfileItem = ({ profile: {
    user: { _id, name},
    dob,
    phonenum,
    houseadd,
}}) => {
    console.log(dob);
    return (
        <div className="profile bg-light">
            <div>
                <h2>{name}</h2>
                <p> <b> Date of Birth: </b> <Moment parse="YYYY-MM-DDTHH:mm:ss.SSSZ" format="DD/MM/YYYY"> { dob } </Moment> </p>
                <p className="my-1"> <b> Phone Number: </b> {phonenum}</p>
                <p className="my-1"> <b> House Address: </b>{houseadd}</p>
                {/*<Link to={`/profile/${_id}`} className="btn btn-primary">View Profile</Link>*/}
            </div>
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileItem
