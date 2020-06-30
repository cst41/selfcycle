import React, { Fragment, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import Alert from '../layout/Alert';
import {setAlert} from '../../actions/alert';

const Convert = ({ convertpoints, calculatepoints, totalPoints, setPoints, alert,setAlert}) => {
    const [formData, setFormData] = useState({

        points: '',
        eWallet: '',
        
    });
    
    const { points, eWallet } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.id]: e.target.value });

    const [success,setSuccess] = useState(false);

    useEffect(() => {
        setSuccess(false);
    });

    const onKeyPress = (e) => {
        let pat = /^[ ]*\d+[ ]*$/;
        
        if(pat.test(e.target.value)) {
            let output = e.target.value * 0.2;
            document.getElementById("eWallet").value = output.toFixed(2);
        } else {
            document.getElementById("eWallet").value = "";
        }
    };
        // calculatepoints = (point, output) => {
        //     var point = e.getElementById("points").value;
        //     var output =  parseFloat(point) / 10;
        //     e.getElementById("eWallet").value = output;
        // };
    const onSubmit = async e =>{ 
        e.preventDefault();
        //convertpoints(points, eWallet);
        let points = document.getElementById("points").value;
        console.log(typeof points);
        let fail = "success";
        let msg;
        let pat = /^[ ]*\d+[ ]*$/;
        console.log(pat.test(points));
        if(!pat.test(points)) {
            fail = "danger";
            msg = "Please enter an appropriate value";
        } else if( points > totalPoints) {
            fail = "danger";
            msg = "Please enter a value that is not more than available points";
        } else {
            msg = "Points successfully credited into your account";
        }
        console.log(msg);

        setAlert(msg, fail);

        if(fail == "success") {
            setSuccess(true);
        }
    }

    if(success) {
        return <Redirect to="/dashboard" />;
    }
    return (
        totalPoints == undefined ? <Spinner/> : 
        (<Fragment>
            <p className="lead">
                <i className="fas fa-exchange-alt text-primary"></i> Enter the amount of points to be convert into eWallet credit
            </p>
            
            <form className="form" onSubmit={e => onSubmit(e)}>
            <img  className='form-img' src={ require('../../img/convert1.png')} /> 
            <div><strong>Available Coins: </strong><span>{totalPoints}</span></div>
                <div className="form-small">
                    <input 
                        type="points" 
                        placeholder="Your Points"
                        id="points" 
                        onKeyUp={e => onKeyPress(e)}
                        maxLength={6}
                        />
                </div>
                <div className="form-small">
                <input
                    type="eWallet"
                    placeholder="eWallet"
                    id="eWallet"
                    disabled
                />
                </div>
                <div >
                    <input
                    className="btn btn-primary"
                    type="submit"
                    value="Convert"
                    />
                    <Link className="btn btn-light my-1"to="/dashboard">Go Back</Link>
                </div>
                
        </form>
        </Fragment>)
    )
}

Convert.propTypes = {
    convertpoints: PropTypes.number,
    calculatepoints: PropTypes.func
}

const mapStateToProp = (state) => {
    return({
        totalPoints: state.points.total,
        alert: state.alert
    });
};

export default connect(mapStateToProp, {setAlert})(Convert)
