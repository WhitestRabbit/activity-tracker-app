import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Tracker</Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Activities</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/create">Create Activity Log</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/user">Create User</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;