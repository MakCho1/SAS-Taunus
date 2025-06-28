import React from 'react';
import Impressum from './Impressum';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Shah. All rights reserved.</p>
            <Impressum />
        </footer>
    );
};

export default Footer;