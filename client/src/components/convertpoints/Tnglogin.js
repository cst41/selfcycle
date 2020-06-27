import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Tnglogin = ({ tnglogin  }) => {
    const [formData, setFormData] = useState({

        email: '',
        password: '',
        
    });
    
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = async e =>{ 
        e.preventDefault();
        tnglogin(email, password);
    }

    
    return (
        <Fragment>
            <h1 className="large text-primary">TnG Sign in</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign Into Your TnG Account</p>
            <p>
                Please make sure you have an exsiting TnG account
            </p><br/>

            <form className="form" onSubmit={e => onSubmit(e)}>
            <img  className='form-img' src={ require('../../img/tng-logo.png')} /> 
                <div className="form-small">
                    <input 
                        type="email" 
                        placeholder="Your TnG Email Address"
                        name="email" 
                        value={email} 
                        onChange={e => onChange(e)}
                        required />
                </div>
                <div className="form-small">
                <input
                    type="password"
                    placeholder="Your TnG Password"
                    name="password"
                    value={password} 
                    onChange={e => onChange(e)}
                />
                </div>
                <Link to='/convert' className='btn btn-primary' >  Login TnG </Link>
                <Link className="btn btn-light my-1"to="/dashboard"> Go Back </Link>
        </form>
        </Fragment>

    )
}

Tnglogin.propTypes = {

}

export default Tnglogin;
