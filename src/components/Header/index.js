import React from 'react'

import './Header.css'
import Logo from '../assets/img/logo.png'

import Button from '../Button'

function Header() {
    return (
        <nav className="Header">
            <a href="/">
                <img className="Logo" src={Logo} alt="FeliFlix - logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Header