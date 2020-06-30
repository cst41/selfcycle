import React from 'react'
import PropTypes from 'prop-types'

const FAQ = props => {
    return (
        <div>
            <h1 class="large text-primary">Frequently Asked Question</h1>
                <div class="profiles">
                    <div><p>

                        <b>1. How long will it take to verified my newly registered account? </b><br />
                        It will take 2-3 days time for us to verify your newly registered account.<br/><br/>

                        <b>2. Am I allowed to change my personal details? </b><br/>
                        Yes, you will need to call out customer service center in order to do so.<br/><br/>

                        <b>3. How do I report a problem that I'm facing? </b><br />
                        You can go to the "Report A Problem" selection on the top navigation bar.<br /><br/>

                        <b>4. How do I connect my Touch n Go account with my Self Cycle account? </b><br />
                        You will need to have an exisitng Touch n Go account.<br /><br/>

                        <b>5. How do I redeem my points? </b><br />
                        Points are automatically redeemed upon the recycable waste collection by the recycable waste collector <br /><br/>

                        <b>6. What is the method of payment for the Self Cycle services? </b><br />
                        Self Cycle operate as a platform as a service model. We charge our customer based on monthly subscription fee. <br /><br/>

                    </p></div>
                </div>
        </div>
    )
}

FAQ.propTypes = {

}

export default FAQ

