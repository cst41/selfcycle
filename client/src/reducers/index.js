import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import points from './points';

export default combineReducers({
    alert,
    auth,
    profile,
    post,
    points
});