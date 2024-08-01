import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {

    const [isNavOpened, setisNavOpened] = useState(false)

    function toggleNav() {
        setisNavOpened(!isNavOpened)
    }

    return (
        <>
            <nav className={`nav ${isNavOpened ? 'nav-collapsed' : ''}`}>
                <div className='logo'>DOMINIC</div>
                <div className='nav-collaps-logo' onClick={toggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </div>
                <ul className={`ul ${isNavOpened ? 'ul-collasped' : ''}`}>
                    <li><Link to={'/'}>Home</Link></li>
                    <li>About</li>
                    <li><Link to={'/album'}>Albums</Link></li>
                    <li><Link to={'/signUp'}>SignUp</Link></li>
                    <li>Me</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav