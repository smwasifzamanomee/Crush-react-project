import React from 'react'
import logo from '../../assets/images/logo.svg'
import reactLogo from '../../assets/images/react.svg'
import './Header.module.css'

const Header = () => {
    return (
            <header>
                <div className="container">
                    <div>
                        <img className='logo' src={logo} alt="Logo" />
                    </div>
                    <div class="textRight">
                        <img src={reactLogo} alt="React" className='reactLogo' />
                        <strong>React</strong>
                    </div>
                </div>
            </header>

    )
}

export default Header