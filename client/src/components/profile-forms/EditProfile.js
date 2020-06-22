import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';


const EditProfile = ({ 
        profile: {profile, loading},
        createProfile, 
        getCurrentProfile, 
        history 
    }) => {

    const [formData, setFormData] = useState({
        //status: '',
        dob: '',
        phonenum: '',
        houseadd: '',
        //skills: '',
        /*twitter: '',
        facebook: '',
        youtube: '',
        linkedin: '',
        instagram: '',*/
    });

    {/*const [displaySocialInputs, toggleSocialInputs] = useState(false);*/}
    
    useEffect(() => {
        getCurrentProfile();

        setFormData({
            //status: loading || !profile.status ? '' : profile.status,
            dob: loading || !profile.dob ? '' : profile.dob,
            phonenum: loading || !profile.phonenum ? '' : profile.phonenum,
            houseadd: loading || !profile.houseadd ? '' : profile.houseadd,
            //skills: loading || !profile.skills ? '' : profile.skills.join(','),
            //bio: loading || !profile.bio ? '' : profile.bio,
            /*twitter: loading || !profile.social ? '' : profile.social.twitter,
            facebook: loading || !profile.social ? '' : profile.social.facebook,
            youtube: loading || !profile.social ? '' : profile.social.youtube,
            linkedin: loading || !profile.social ? '' : profile.social.linkedin,
            instagram: loading || !profile.social ? '' : profile.social.instagram*/
        });
    } , [loading, getCurrentProfile]);
    
    const{
        //status,
        dob,
        phonenum,
        houseadd,
        //skills,
    } = formData

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    
    const onSubmit = e =>{
        e.preventDefault();
        createProfile(formData, history, true);
    }
    
    return (
        <Fragment>
        <h1 class="large text-primary"> My Profile</h1>
        <p class="lead">
            <i class="fas fa-user"></i> ------------------------------------
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
          <small className="form-text"> Your house address (eg. Boston, MA)</small >
        </div>

        {/*<div className="form-group">
          <input type="text" placeholder="* Skills" name="skills" value={skills} onChange={e => onChange(e)}/>
          <small className="form-text">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small>
        </div>*
        
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={e => onChange(e)} ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>*/}
        
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1"to="/dashboard">Go Back</Link>
      </form>
    </Fragment>
    )
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(
    mapStateToProps, 
    { createProfile, getCurrentProfile})
    (withRouter(EditProfile)
);
