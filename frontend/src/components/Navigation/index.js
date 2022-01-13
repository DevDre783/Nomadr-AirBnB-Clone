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
      <>
        <NavLink className="become__host" to={'/host'}>Become a Host</NavLink>
        <ProfileButton user={sessionUser} />
      </>
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
          <span>
            <NavLink className='vanstorent' to='/vans'>Rent a Van</NavLink>
          </span>
          <span >
            <NavLink className='github' to='/'><i className="fab fa-github"></i></NavLink>
          </span>
          <span >
            <NavLink className='linkedIn' to='/'><i className="fab fa-linkedin-in"></i></NavLink>
          </span>
        </div>
        <nav>
          <div className='right-nav'>
            <div className='profile-icon'>{isLoaded && sessionLinks}</div>
          </div>
        </nav>
    </nav>
  );
}

export default Navigation;
