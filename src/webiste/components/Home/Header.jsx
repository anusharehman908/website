// import React from 'react';
// import './Header.css';
// import logo from '../../../assests/pharmacy_logo2.jpg';
// import { FaShoppingCart } from 'react-icons/fa';

//  const Header = () => {
//      return (
//          <>

//              <nav className="navbar  navbar-expand-lg navbar-light bg-white overflow-hidden ">
//                  <div className="container ">
//                               <a className="navbar-brand" href="#">
//                 <img src={logo} className="img-fluid" alt="Pharmacy Logo" />
//                      </a>
 
                     

//       {/* <div className="container">
//         <div className="header-content">
          
//           <div className="search-bar">
//             <input type="text" placeholder="Search..." className="search-input" />
//             <button className="search-button">Search</button>
//           </div>
//           <div className="cart-icon">
//             <FaShoppingCart size={24} />
//           </div>
//         </div>
//       </div> */}
//                      <button
//                          className="navbar-toggler"
//                          type="button"
//                          data-bs-toggle="collapse"
//                          data-bs-target="#navbarSupportedContent"
//                          aria-controls="navbarSupportedContent"
//                          aria-expanded="false"
//                          aria-label="Toggle navigation"
//                      >
//                          <span className="navbar-toggler-icon"></span>                   
//                      </button>
//                      <div className="collapse navbar-collapse j" id="navbarSupportedContent">
//                          <ul className="navbar-nav ">
//                              <li className="nav-item">
//                                  <a className="Categories" aria-current="page" href="#">Baby & Mother Care</a>
//                              </li>
//                              <li className="nav-item">
//                                  <a className="nav-link" aria-current="page" href="#">Nutritions & Supplements</a>
//                              </li>
//                              <li className="nav-item">
//                                  <a className="nav-link" aria-current="page" href="#">Medicine</a>
//                              </li>
//                              <li className="nav-item">
//                                  <a className="nav-link" aria-current="page" href="#">OTC And Health Need</a>
//                              </li>
//                          </ul>

                         
//                          <div className="container">
//         <div className="header-content">
          
//           <div className="search-bar">
//             <input type="text" placeholder="Search..." className="search-input" />
//             <button className="search-button">Search</button>
//           </div>
//           <div className="cart-icon">
//             <FaShoppingCart size={24} />
//           </div>
//         </div>
//       </div>
//                           {/* <div className="d-flex gap-lg-2 flex-column flex-lg-row align-items-center pt-lg-0 pt-3 gap-4">
//                              <button className="btn light-blue-btn text-white" type="button">Login</button>
//                              <button className="btn light-blue-btn text-white" type="button">Register</button>
//                          </div>  */} 



//                      </div>
//                  </div>
//              </nav>
//          </>
//      );
//  }
//  export default Header































import React from 'react';
import './Header.css';
import logo from '../../../assests/pharmacy_logo2.jpg';
import { FaShoppingCart } from 'react-icons/fa';

// import React from 'react';
// import './Header.css'; // Ensure you have this file for CSS
// import logo from '../../../assets/pharmacy_logo2.jpg'; // Adjust the path as needed
// import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    {/* Brand Logo */}
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Pharmacy Logo" className="logo" />
                    </a>

                    {/* Toggler Button for Mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation and Search */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#Baby & Mother Care">Baby & Mother Care </a>
                                
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Nutritions & Supplements">Nutritions & Supplements</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Medicine">Medicine</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#OTC And Health Need">OTC And Health Need</a>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center">
                            <div className="search-bar">
                                <input type="text" placeholder="Search..." className="search-input" />
                                <button className="search-button">Search</button>
                            </div>
                            <div className="cart-icon">
                                <FaShoppingCart size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;






































