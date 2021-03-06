import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from "./components/layout/Footer";
import ContactUs from "./components/layout/ContactUs";
import FAQ from "./components/layout/FAQ";
import WaitVerify from "./components/layout/Notify";
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import TngLogin from './components/convertpoints/Tnglogin';
import ConvertPoints from './components/convertpoints/Convert';
import MyProfile from './components/profile-forms/MyProfile';
import ViewProfile from './components/profile-forms/ViewProfile';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
//import AddExperience from './components/profile-forms/AddExperience';
//import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import ViewPosts from './components/posts/ViewPosts';
import PrivateRoute from './components/routing/PrivateRoute';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';
import Convert from './components/convertpoints/Convert';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => { 
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
  <Provider store = {store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className="container">
          <Alert/>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/faq" component={FAQ} />
            <PrivateRoute exact path="/profiles" component={Profiles} />
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/my-profile" component={MyProfile} />
            <PrivateRoute exact path="/view-profile" component={ViewProfile} />
            <Route exact path="/wait-verify" component={WaitVerify}/>
            <PrivateRoute exact path="/tng-login" component={TngLogin} />
            <PrivateRoute exact path="/convert" component={ConvertPoints} />
            <PrivateRoute exact path="/create-profile" component={CreateProfile} />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            {/*<PrivateRoute exact path="/add-experience" component={AddExperience} />*/}
            {/*<PrivateRoute exact path="/add-education" component={AddEducation} />*/}
            <PrivateRoute exact path="/viewposts" component={ViewPosts} />
            <PrivateRoute exact path="/posts" component={Posts} />
          </Switch>
        </section>
        <Footer />
      </Fragment>
    </Router>
  </Provider>
)};
export default App;
