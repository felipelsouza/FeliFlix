import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import Logo from '../assets/img/logo.png'

import Button from '../Button'

function Header() {
    return (
        <nav className="Header">
            <Link to="/">
                <img className="Logo" src={Logo} alt="FeliFlix - logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/add/Video">
                New Video
            </Button>
        </nav>
    )
}

export default Header