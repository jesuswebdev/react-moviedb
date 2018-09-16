import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Navbar';

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;
