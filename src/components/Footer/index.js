import React from "react";

function Footer() {
    return (
        <footer>
            <div className="navbar sticky-bottom navbar-light bg-light footer">
                <p className="footer-icon">
                    <a href="https://github.com/itsclairehi" target="_blank" >
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                </p>
                <p className="footer-icon">
                    <a href="https://www.linkedin.com/in/claire-puckett-26044b27/" target="_blank">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                </p>
                <p className="footer-icon">
                    <a href="https://www.instagram.com/bearpuckett/" target="_blank">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                </p>
                <p className="footer-icon">
                    <a href="mailto:cpuckett9@gmail.com">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                </p>
            </div>
            <div>
                <div className="navbar sticky-bottom navbar-light bg-light justify-content-center d-flex">
                    <p className="copyright">Claire Puckett © 2021</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;