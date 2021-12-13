import React from 'react'
import "../style/footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <span className="footer-text">
                &copy;{new Date().getFullYear()} All Rights Reserved.
            </span>
        </div>
    )
}

export default Footer
