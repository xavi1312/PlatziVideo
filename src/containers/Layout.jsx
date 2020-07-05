import React, { Children } from 'react';
// Components
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <div className='App'>
    {children}
    <Footer />
  </div>
);

export default Layout;
