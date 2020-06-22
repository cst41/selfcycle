import React, {Fragment} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ContactUs = props => {
    return (
        
            <div>
                <h1 class="large text-primary">Contact Us</h1>
                <div class="profiles">
                    <div><p>

                        <b>Hotline Support </b><br />
                        Call Center Number:<b> 1-800-22-0088</b><br/>
                        Call centre works from Monday to Sunday, from 9:00 to 21:00<br/>
                        English, Mandarin, Bahasa Malaysia<br /><br />

                        <b> Online Support </b><br />
                        Visit <Link to="/faq"> Self Cycle Support </Link> to quickly find the manual, software, updates, FAQ and service centers <br /><br />

                        <b>Email Support </b><br />
                        Email us at: selfcycle@selfycycle.com<br />

                    </p></div>
                </div>

            </div>
    )
}

ContactUs.propTypes = {

}

export default ContactUs
