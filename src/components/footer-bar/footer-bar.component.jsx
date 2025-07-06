//import { useState, useEffect } from "react";

import "./footer-bar.css";

const FooterBar = () => {
    //const [selectedMenu, setSelectedMenu] = useState();

    return (
        <>
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3">
                        <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap">
                            <img src="/images/logo.png" width="36px" alt="Trending Course"/> Trending Courses
                        </a>
                        <p className="text-body-secondary">Upskill yourself</p>
                    </div>
                    <div className="col mb-3">
                    </div>
                    <div className="col mb-3">
                    </div>
                    <div className="col mb-3">
                        <h5>Navigation</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a className="nav-link p-0 text-body-secondary" href="#" aria-label="Instagram">
                                    My Courses
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a className="nav-link p-0 text-body-secondary" href="#" aria-label="Facebook">
                                    Wishlist
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h5>React Topics</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Features</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default FooterBar;
