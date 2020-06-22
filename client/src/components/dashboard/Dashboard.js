import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({ 
    getCurrentProfile, 
    deleteAccount,
    auth: { user }, 
    profile: { profile, loading} 
    }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
    
    return loading && profile === null ? (<Spinner/>) : 
    (<Fragment> 
        <h1 className="large text-primary"> My Dashboard</h1>
        <p className="lead">
            <i className="fas fa-user"></i> Welcome { user && user.name}
        </p>

        <table className="table">
                <tbody>
                    <tr>
                        <tr> <b> Email Address : </b> {  user && user.email }</tr>
                    </tr>
                </tbody>
        </table> <br/>

        {profile !== null ? (
        <Fragment> 
            <DashboardActions/>
           {/* <Experience experience={profile.experience}/>
            <Education education={profile.education}/>
            
            <div className="my-2">
                <button className="btn btn-danger" onClick={()=> deleteAccount()}> 
                    <i className="fas fa-user-minus"></i> Delete My Account
                </button>
            </div>*/}
            
            <br/><br/><br/>
        </Fragment> 
        ):( 
        <Fragment> 
            <p> You have not setup your profile, please add some info. </p>
            <Link to='/my-profile' className="btn btn-primary my-1">
                Create Profile
            </Link>
        </Fragment>)}

        {/*<div class="post bg-white p-1 my-1">
        <table  className="table">
            <tbody> 
                <tr>
                    <tr> 
                        <td> <img class="round-img" src={ require('../../img/box.png')} /> </td>
                        <td> <img class="round-img" src={ require('../../img/glass-bottle.png')}/> </td>
                        <td> <img class="round-img" src={ require('../../img/paper-book.png')}/> </td>
                        <td> <img class="round-img" src={ require('../../img/tin-can.png')}/> </td>
                    </tr>
                    <tr>
                        <td> <b> Paper, Cardboxes: 1kg = 10 points </b> </td> 
                        <td> <b> Glass: 1kg = 7 points </b> </td> 
                        <td> <b> Plastic: 1kg = 3 points </b> </td> 
                        <td> <b> Metal, Aluminium: 1 Kg = 7 points </b> </td> 
                    </tr>
                </tr>
            </tbody>
        </table>
        </div>*/}

        <div class="post bg-white p-1 my-1">
            <div> 
                <img class="round-img" src={ require('../../img/box-500.png')} /> 
                <img class="round-img" src={ require('../../img/plastics_laundry.png')} /> 
                <img class="round-img" src={ require('../../img/glass-bottle.png')}/>
                <img class="round-img" src={ require('../../img/tin-can.png')}/>
            </div>
            <div>
            <img class="round-img" src={ require('../../img/paper-book.png')}/> 
            <b> Paper, cardboxes, books: 1kg = 10 points,  </b> <br/>

            <img class="round-img" src={ require('../../img/plastic_bag.png')}/> 
            <b> Plastic bag, plastic bottles: 1kg = 3 points,  </b> <br/>

            <img class="round-img" src={ require('../../img/mason-jar.png')}/>    
            <b> Glass jar, glass bottle: 1kg = 7 points, Glass jar,  </b> <br/>
            
            <img class="round-img" src={ require('../../img/drink-can.png')}/>    
            <b>  Metal can, aluminium cans: 1 Kg = 7 points , </b>
            </div>


        </div>
        
    </Fragment>);
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(
    mapStateToProps, 
    {getCurrentProfile, deleteAccount}
)(Dashboard);
