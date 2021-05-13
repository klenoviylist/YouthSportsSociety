import React from 'react';
import './Footer.scss'

function Footer() {

    const date = new Date();
    const year = date.getFullYear();
   
    return (
        <div className="container-fluid">
        <footer>
            <p>© {year}  ⚽️  Youth Sports Society </p>
          <p>Website built by Natalia Shakhvorostova</p>
        </footer>
        </div>
    )
}

export default Footer;