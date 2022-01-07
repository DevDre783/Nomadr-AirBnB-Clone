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
    <div className='navbar'>
        <div className='logo'>
            <Link to={`/`}>
                <i className="fas fa-caravan">--<i className="fas fa-shuttle-van"></i></i>
            </Link>
        </div>
        <div>
          <span className='vanstorent'>
            <Link to={`/`}>Vans to rent</Link>
          </span>
          <span className='experiences'>
            <Link to={`/`}>Experiences</Link>
          </span>
        </div>
        <nav>
          <div className='right-nav'>
            <Link to={`/`}><div>Become a Host</div></Link>
            <button><i className="fas fa-globe"></i></button>
            {isLoaded && sessionLinks}
          </div>
        </nav>
    </div>
  );
}

export default Navigation;
