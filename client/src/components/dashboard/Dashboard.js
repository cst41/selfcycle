import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import RecycleGuide from './RecycleGuide';
import PieChart from './PieChart';
import money from './PieChartComponent/money.svg';
import Map from './Map';
import { updatePoints } from '../../actions/points';
import {Redirect} from 'react-router-dom';


const Dashboard = ({ 
    getCurrentProfile, 
    deleteAccount,
    auth: { user }, 
    profile: { profile, loading},
    total,
    points,
    updatePoints
    }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
    
    return loading && profile === null ? (<Spinner/>) : 
    (user.userLevel === 1 ? (<Fragment> 
        <h1 className="large text-primary"> My Dashboard</h1>
        <p className="lead">
            <i className="fas fa-user"></i> Welcome { user && user.name}
        </p>

        <table className="table">
                <tbody>
                    <tr>
                        <tr> <b> Email Address : </b> {  user && user.email }</tr>
                        <tr> <b> Account Created On: </b> <Moment format='DD/MM/YYYY'>{ user && user.date}</Moment></tr>
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
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <RecycleGuide/>
            <div style={{alignSelf: 'flex-end'}}>
                <strong>Total points: </strong>
                <img src={money} style={{width: '30px', verticalAlign: '-10px'}}/> <span> </span> <span>{points}</span>
            </div>
            <PieChart/>
            <div>
                <button style={btnStyle} onClick={() => {updatePoints(total)}}>Pick up Trash</button>
            </div>
        </div>
    </Fragment>): user.userLevel === 2 ? (
        <div>
            <Map />
        </div>
    ): <Redirect to="/profiles"/>);
};

const btnStyle = {
    border: "0px solid black",
    backgroundColor: "#27ae60",
    color: "white",
    padding: "15px 25px",
    marginTop: "20px",
    cursor: "pointer",
    boxShadow: "0 3px 3px 0 grey"
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
    updatePoints: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    total: state.points.total,
    points: state.points.points
});

export default connect(
    mapStateToProps, 
    {getCurrentProfile, deleteAccount, updatePoints}
)(Dashboard);
