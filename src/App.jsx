 import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/js/dist/dropdown';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Dashboard from './containers/Dashboard';
// import Customer from './containers/Customer';
// import Sales from './containers/Sales';
// import Inventory from './containers/Inventory';
// import { UserProvider } from './containers/UserContext';
// import Login from './containers/Login';
// import Register from './containers/Register';/
// import ProtectedRoute from './ProtectedRoute';
// import { AuthProvider } from './containers/AuthContext';
// import Purchase from './containers/Purchase';
// import Supplier from './containers/Supplier';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
import Home from './webiste/components/Home/Home';
import TopSellingItems from './webiste/components/Home/Top Selling Items';
import Deal from './webiste/components/Home/Deal';
import Featured from './webiste/components/Home/Featured';
import BlogPost from './webiste/components/Home/BlogPost';
import Brand from './webiste/components/Home/Brand';




import './App.css';


const App = () => {
 
  return (
    <>
    {/* <div className="container-lg container-xl container-fluid-md container-fluid-sm container-fluid mt-4 mb-4 bg-white c-container">
      <div className="row l-grey rounded border-40 "> */}
            <Home />
            
            
      {/* </div>
    </div> */}
    </>
  );
};

export default App;
