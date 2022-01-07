// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

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
      </>
    );
  }

  return (
    <nav>
        <div className='logo'>
            <Link exact to={`/`}>
                <i className="fas fa-caravan">--<i className="fas fa-shuttle-van"></i>rvnb</i>
            </Link>
        </div>
        {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;
