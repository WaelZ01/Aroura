// // import React from 'react'
// import React, { useState } from 'react';


// export default function Navbar() {


//     const [isOpen, setIsOpen] = useState(false);
//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     }


//   return (
//     <>
//         <nav className="navbar">
//       <div className="navbar-container">
//         <h1 className="logo"><a href='/'>Aroura</a></h1>
//         <div className="menu-icon" onClick={toggleMenu}>
//           {/* Hamburger icon */}
//           <span className={isOpen ? 'bar open' : 'bar'}></span>
//           <span className={isOpen ? 'bar open' : 'bar'}></span>
//           <span className={isOpen ? 'bar open' : 'bar'}></span>
//         </div>

//         <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
//           <li className="nav-item">
//             <a href="#about" className="nav-links" onClick={toggleMenu}>
//               About Us
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#shop" className="nav-links" onClick={toggleMenu}>
//               Shop
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#contact" className="nav-links" onClick={toggleMenu}>
//               Contact Us
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//     </>
//   )
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">
                    <Link to="/">Aroura</Link>
                </h1>
                <div className="menu-icon" onClick={toggleMenu}>
                    <span className={isOpen ? 'bar open' : 'bar'}></span>
                    <span className={isOpen ? 'bar open' : 'bar'}></span>
                    <span className={isOpen ? 'bar open' : 'bar'}></span>
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/home-page/AboutUs" className="nav-links" onClick={toggleMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop" className="nav-links" onClick={toggleMenu}>
                            Shop
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contactUs" className="nav-links" onClick={toggleMenu}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
