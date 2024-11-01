import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css"

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef(null);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    // Close nav if clicked outside
    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsNavOpen(false);
        }
    };

    useEffect(() => {
        if (isNavOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isNavOpen]);

    return (
        <header>
            <div className="heading">
                <h1>PHIL PROFESSIONAL</h1>
                <button className="nav-toggle" onClick={toggleNav}>
                    ☰
                </button>
                <nav ref={navRef} className={isNavOpen ? "open" : ""}>
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
                        <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>Portfolio</NavLink></li>
                        <li><NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>Skills</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
