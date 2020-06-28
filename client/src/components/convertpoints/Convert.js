import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'

const Convert = ({ convertpoints, calculatepoints  }) => {
    const [formData, setFormData] = useState({

        points: '',
        eWallet: '',
        
    });
    
    const { points, eWallet } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.id]: e.target.value });

    const onKeyPress = (e) =>
        calculatepoints = (point, output) => {
            var point = e.getElementById("points").value;
            var output =  parseFloat(point) / 10;
            e.getElementById("eWallet").value = output;
        };
    
    
    const onSubmit = async e =>{ 
        e.preventDefault();
        convertpoints(points, eWallet);
    }

    
    return (
        <Fragment>
            
            <p className="lead">
                <i className="fas fa-exchange-alt text-primary"></i> Enter the amount of points to be convert into eWallet credit
            </p>
            
            <form className="form" onSubmit={e => onSubmit(e)} onKeyDown={e => onKeyPress(e)}>
            <img  className='form-img' src={ require('../../img/convert1.png')} /> 
                <div className="form-small">
                    <input 
                        type="points" 
                        placeholder="Your Points"
                        id="points" 
                        value={points} 
                        onChange={e => onChange(e)}
                        onKeyDown={e => onKeyPress(e)}
                        maxLength={6}
                        />
                </div>
                <div className="form-small">
                <input
                    type="eWallet"
                    //placeholder="eWallet"
                    id="eWallet"
                    value={eWallet}
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
    convertpoints: PropTypes.number,
    calculatepoints: PropTypes.func,
}

export default Convert
