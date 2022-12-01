import React from 'react';
import styles from './layout.module.css';
import Footer from '../Footer/index';
import Header from '../Header/index';
const Layout = ({children}) => {
  return (
    <div>
      <Header />            
      <div className={styles.content}>
      {children}      
      </div>
      <Footer/>
    </div>
  );
}

export default Layout