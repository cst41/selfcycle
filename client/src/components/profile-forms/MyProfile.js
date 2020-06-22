import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const MyProfile = ({ 
  createProfile, 
  history }) => {
    const [formData, setformData] = useState({
      dob: '',
      phonenum: '',
      houseadd: '',
    });

    const{
        dob,
        phonenum,
        houseadd,
      } = formData

    const onChange = e => setformData({...formData, [e.target.name]: e.target.value});
    
    const onSubmit = e =>{
          e.preventDefault();
          createProfile(formData, history);
    }

    
    return (
        <Fragment>
        <p className="lead"><i className="fas fa-user"></i> Create Your SelfCycle Profile</p>
        <form className="form" onSubmit={e => onSubmit(e)}>

        <div className="form-group">
          <input type="date" name="dob" value={dob} onChange={e => onChange(e)}/>
          <small className="form-text" >Your date of birth</small>
        </div>

        <div className="form-group">
          <input type="text" placeholder="*Phone number" name="phonenum" value={phonenum} onChange={e => onChange(e)}/>
          <small className="form-text" >Your phone number</small >
        </div>

        <div className="form-group">
          <input type="text" placeholder="*House address" name="houseadd" value={houseadd} onChange={e => onChange(e)}/>
          <small className="form-text" >Your house address</small >
        </div>

        <input type="submit" className="btn btn-primary my-1"/>
      </form>
    </Fragment>
    )
}

MyProfile.propTypes = {
  
  createProfile: PropTypes.func.isRequired,
};
    
    
export default connect(null, { createProfile})(withRouter(MyProfile));