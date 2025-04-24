import React from 'react'
import LogoImage from "../../public/Images/brand_logo.png"
const Header = () => {
    return (
        <nav>
            <div>
                <img src={LogoImage} alt="" />
            </div>
            <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>Login</button>
        </nav>
    )
}

export default Header
