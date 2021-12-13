import React from 'react'
import "../style/navbar.css"
import {Link} from "react-router-dom"
import {GiFamilyHouse} from "react-icons/gi"

const Navbar = () => {
    return (
        <div className="navigation">
            <div className="navigation-block">
                <div className="navigation-block-logo">
                    <Link to="/">
                        <span><GiFamilyHouse/></span>
                            ADAMS FAMILY
                    </Link>
                </div>
                <div className="navigation-block-links">
                    <Link to="/">Home</Link>
                    <Link to="/add-audience">Add audience</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
