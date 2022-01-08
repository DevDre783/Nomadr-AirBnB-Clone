// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HomePage.css';

function Home() {

    return (
        <div className='video'>
            <iframe className='splash-video' src="https://www.youtube.com/embed/osalW0-0AxI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameborder="0" allowfullscreen data-autoplay data-keepplaying></iframe>
        </div>
    );
}

export default Home;
