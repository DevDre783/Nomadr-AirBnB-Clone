import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import './Footer.css'

function Footer() {
    return (
        <nav className='footer'>
            <p id='developed-by'>Developed By: Andres Manuel Soca</p>
            <p id="my-email">Lumen.development01@gmail.com</p>
        </nav>
    )
}

export default Footer;
