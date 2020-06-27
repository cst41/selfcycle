import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'

const Convert = ({ convertpoints  }) => {
    const [formData, setFormData] = useState({

        points: '',
        emoney: '',
        
    });
    
    const { points, emoney } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = async e =>{ 
        e.preventDefault();
        convertpoints(points, emoney);
    }
    return (
        <Fragment>
            
            <p className="lead">
                <i className="fas fa-exchange-alt text-primary"></i> Enter the amount of points to be convert into eWallet credit
            </p>
            
            <form className="form" onSubmit={e => onSubmit(e)}>
            <img  className='form-img' src={ require('../../img/convert1.png')} /> 
                <div className="form-small">
                    <input 
                        type="points" 
                        placeholder="Your Points"
                        name="points" 
                        value={points} 
                        onChange={e => onChange(e)}
                        required />
                </div>
                <div className="form-small">
                <input
                    type="emoney"
                    placeholder="eMoney"
                    name="emoney"
                    value={emoney} 
                    onChange={e => onChange(e)}
                />
                </div>
                <Link to='/convert' className='btn btn-primary' >  Convert </Link>
                <Link className="btn btn-light my-1"to="/dashboard">Go Back</Link>
        </form>
        </Fragment>
    )
}

Convert.propTypes = {

}

export default Convert
