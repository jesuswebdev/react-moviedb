import React from 'react';
import Aux from './../components/Aux';
import Footer from '../components/Footer';
import Header from '../components/Navbar';

const Layout = (props) => {
    return (
        <Aux>
            <Header />
            {props.children}
            <Footer />
        </Aux>
    );
}

export default Layout;
