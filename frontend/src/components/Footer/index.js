import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import './Footer.css'

function Footer() {
    return (
        <nav className='footer'>
            <p id='developed-by'>Developed By: Andres Manuel Soca</p>
            <a style={{position: "absolute"}} target="_blank" className='github' href='https://github.com/DevDre783/Nomadr-AirBnB-Clone'><i style={{color: "white"}} className="fab fa-github"></i></a>
            <a target="_blank" className='linkedIn' href='https://www.linkedin.com/in/andres-soca-23852aab/'><i style={{color: "white"}} className="fab fa-linkedin-in"></i></a>
            <p id="my-email">Lumen.development01@gmail.com</p>
        </nav>
    )
}

export default Footer;
