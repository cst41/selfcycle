import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Notify = props => {
    return (
        <Fragment>
            <h1 class="large text-primary"> Thank you for registering! </h1> <br/>
            <h3> You have registered to Self Cycle</h3> <br/>
            <p> 
                Your account will take 2-3 working days to be verified by our Self Cycle staff<br/>
                upon visiting your house to setup the Smart Waste Bin <br/>
                Thank you for your cooperation <br/><br/><br/><br/><br/>
            </p><br/><br/><br/><br/><br/><br/>
            
        </Fragment>
        
    )
}

Notify.propTypes = {

}

export default Notify
