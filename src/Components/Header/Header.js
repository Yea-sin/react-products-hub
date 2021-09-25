import React from 'react';
import './Header.css'

const Header = () => {
    
    return (
        <div className=''>
            <nav className="navbar navbar-light p-5 navbar-bg">
                <div className="container-fluid">
                    <form className="d-flex mx-auto w-75">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;