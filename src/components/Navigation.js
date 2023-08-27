import React from 'react';

// navbar assigning section to anchor tag
function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav className='nav-bar'>
            <div>
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <a href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >About</a>
                    </li>

                    <li className='nav-item'>
                        <a href="#robot"
                            onClick={() => handlePageChange('Robot')}
                            className={currentPage === 'Robot' ? 'nav-link active' : 'nav-link'}
                        >Robot</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#social"
                            onClick={() => handlePageChange('Socail')}
                            className={currentPage === 'Socail' ? 'nav-link active' : 'nav-link'}
                        >Social Media</a>
                    </li>
                </ul>
            </div>
        </nav>


    );
}


export default Navigation;

