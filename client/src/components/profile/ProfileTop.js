import React from 'react'
import PropTypes from 'prop-types'

const ProfileTop = ({ profile: {
    //status,
    phonenum,
    houseadd,
    website,
    //social,
    user:{name}
  }})=> {
    return (
        <div class="profile-top bg-primary p-2">
          <img />
            <h1 class="large">{name}</h1>
            <p class="lead">{phonenum}</p>
            <p class="lead">{houseadd}</p>
          <div class="icons my-1">
            { website && (
                <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-globe fa-2x"></i>
            </a>
            )}
            
          </div>
        </div>
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileTop
