// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();

    dispatch(sessionActions.logout());

    history.push('/');
  };

  return (
    <>
      <button className="profile-menu" onClick={openMenu}>
        <i className="fas fa-bars" />
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <div className="WOW">
          <ul className="profile-dropdown">
            <li className="Dd-username">User: {user.username}</li>
            <li className="Dd-email">Email: {user.email}</li>
            <NavLink className='BOOKINGS' to='/bookings'>Bookings</NavLink>
            <button className="logout-btn" onClick={logout}>Log Out</button>
          </ul>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
