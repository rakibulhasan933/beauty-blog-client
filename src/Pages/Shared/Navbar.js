import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand px-5 topHeader text-uppercase font-monospace" href="/">Beauty <span>Tips</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <form className="d-flex">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active pe-5 font-monospace" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-5 font-monospace" href="/">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-5 font-monospace" href="/">About</a>
                            </li>
                        </ul>
                        </div>
                    </form>
            </div>
        </nav>
    );
};

export default Navbar;