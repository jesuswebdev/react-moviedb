import React from 'react';
import SearchBar from '../components/SearchBar';

const Layout = (props) => {
    return (
        <div>
            <SearchBar />
            {props.children}
        </div>
    );
}

export default Layout;
