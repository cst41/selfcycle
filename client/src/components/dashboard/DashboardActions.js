import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
    return (
        <div className='dash-buttons'>
        <Link to='/view-profile' className='btn btn-light'
          ><i className='fas fa-user-circle text-primary'></i> View My Profile
         </Link>

        <Link to='/exchange-points' className='btn btn-light'
          ><i class='fas fa-exchange-alt text-primary'></i> Exchange Points
         </Link>
        
        {/*
        <Link to='/add-experience' className='btn btn-light'
          ><i className='fab fa-black-tie text-primary'></i> Add Experience
          </Link  >

        <Link to='/add-education' className='btn btn-light'
          ><i className='fas fa-graduation-cap text-primary'></i> Add Education
        </Link>*/}
      </div>
    )
}

export default DashboardActions;
