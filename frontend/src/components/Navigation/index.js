// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import VansHostForm from '../VanHostForm';
import Demo from './demo-user';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="login" to="/login">Log In</NavLink>
        <NavLink className="signup" to="/signup">Sign Up</NavLink>
        <Demo />
      </>
    );
  }

  return (
    <nav className='navbar'>
        <div className='logo'>
            <Link to={`/`}>
                <i className="fas fa-caravan">--<i className="fas fa-shuttle-van"></i></i>
            </Link>
        </div>
        <div>
          <span className='vanstorent'>
            <Link to='/vans'>Rent a Van</Link>
          </span>
          <span className='github'>
            <Link to='/'>github-logo</Link>
          </span>
          <span className='linkedIn'>
            <Link to='/'>linkedIn-logo</Link>
          </span>
        </div>
        <nav>
          <div className='right-nav'>
            <NavLink to={'/host'}>Become a Host</NavLink>
            <button className='languages-globe'><i className="fas fa-globe"></i></button>
            <div className='profile-icon'>{isLoaded && sessionLinks}</div>
          </div>
        </nav>
    </nav>
  );
}

export default Navigation;
