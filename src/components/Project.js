import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Robot';
import Social from './pages/Social';




export default function Project() {
    const [currentPage, setCurrentPage] = useState('About');
    // method for checking current page and rendering corresponding section
    const renderPage = () => {
        if (currentPage === 'About') {
            return (<div>
                <Header />
                <About />
                <Footer />
            </div>
            );
        }

        if (currentPage === 'Robot') {
            return (<div>
                <Header />
                <Contact />
                <Footer />
            </div>
            );
        }
        return (<div>
            <Header />
            <Social />
            <Footer />
        </div>
        );

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}