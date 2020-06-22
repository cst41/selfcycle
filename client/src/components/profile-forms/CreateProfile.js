import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';


const CreateProfile = ({ createProfile, history }) => {
    const [formData, setformData] = useState({
      //status: '',
      dob: '',
      phonenum: '',
      houseadd: '',
      //skills: '',
      /*twitter: '',
      facebook: '',
      youtube: '',
      linkedin: '',
      instagram: ''*/
    });

    {/*const [displaySocialInputs, toggleSocialInputs] = useState(false);*/}

    const{
      //status,
      dob,
      phonenum,
      houseadd,
      //skills,
    } = formData

    const onChange = e => setformData({...formData, [e.target.name]: e.target.value});
    
    const onSubmit = e =>{
        e.preventDefault();
        createProfile(formData, history);
    }
    
    return (
        <Fragment>
        <h1 class="large text-primary">Create Your Profile</h1>
        <p class="lead">
            <i class="fas fa-user"></i> Let's get some information to make your profile stand out
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={e => onSubmit(e)}>
           { /*<div className="form-group">
            <select name="status" value={status} onChange={e => onChange(e)}>
                <option value="0">* Select Professional Status</option>
                <option value="Developer">Developer</option>
                <option value="Junior Developer">Junior Developer</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Manager">Manager</option>
                <option value="Student or Learning">Student or Learning</option>
                <option value="Instructor">Instructor or Teacher</option>
                <option value="Intern">Intern</option>
                <option value="Other">Other</option>
            </select>
            <small className="form-text">Give us an idea of where you are at in your career</small>
          </div>*/}

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
          <small className="form-text" >Your house address (eg. Boston, MA)</small >
        </div>

        {/*<div className="form-group">
          <input type="text" placeholder="* Skills" name="skills" value={skills} onChange={e => onChange(e)}/>
          <small className="form-text">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small>
        </div>*/}

        {/*<div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={e => onChange(e)} ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>*/}

        
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1"to="/dashboard">Go Back</Link>
      </form>
    </Fragment>
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};


export default connect(null, { createProfile})(withRouter(CreateProfile));
