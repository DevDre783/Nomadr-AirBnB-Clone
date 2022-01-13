// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HomePage.css';

function Home() {

    return (
        <div className='splash-image-container'>
            <img className='the-image' src="https://www.worldphoto.org/sites/default/files/default-media/Mountain%20Road%20Aerial%20-%20%C2%A9%20Manish%20Mamtani.jpg"></img>
            <div className='banner'>
                <div className='banner__info'>
                    <h3 className='banner-msg'>Nomadr when. Nomadr where. There's a Van out there.</h3>
                </div>
            </div>
            <div className='site-name'>Nomadr.</div>
            <div className='VanLife__container'>
                <img className='VanLife__image' alt="Van-Life" src={'https://cdn.shopify.com/s/files/1/0458/2591/7081/products/campervan3-mockup_1024x.png?v=1630079365'}></img>
                <div className='explore-handler'>
                <Link to={`/vans`}>
                    <button className='explore-btn'>Explore Nearby</button>
                </Link>
                </div>
            </div>
            <div className='build__container'>
                <h2 className='build-title'>Full Van Build<i class="fas fa-share"></i></h2>
                <iframe className='build__video' width="1422" height="800" src="https://www.youtube.com/embed/ye-VQ3Za1mY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        <footer>
            // FOOTER: list languages used
            <div className='project__langs'>
                <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                    <li>PostGres</li>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>Express</li>
                </ul>
            </div>
            <div className='footImage__container'>
                {/* <img className='foot__image' alt="Van-Life" src={'../../../public/images/FORESTpng-portable-network-graphics-clip-art-vector-graphics-images-of-forest-trees-vector-rock-cafe-5ce61699e9a938.7338035915585829379571.png'}></img> */}
            </div>
        </footer>
        </div>
    );
}

export default Home;
