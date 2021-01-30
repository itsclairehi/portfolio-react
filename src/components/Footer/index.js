import React from "react";

function Footer() {
    return (
        <footer>
            <div className="navbar sticky-bottom navbar-light bg-light justify-content-center">
                <ul><a className="footer-link" href="https://github.com/itsclairehi" target="_blank" >
                    github
                    </a></ul>
                <ul> <a className="footer-link" href="https://www.linkedin.com/in/claire-puckett-26044b27/" target="_blank">
                    linkedin
                    </a></ul>
                <ul> <a className="footer-link" href="https://www.instagram.com/bearpuckett/" target="_blank">
                    instagram
                    </a></ul>
            </div>
            <div>
                <div className="navbar sticky-bottom navbar-light bg-light justify-content-center">
                    <p className="navbar-brand">Claire Puckett © 2021</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;