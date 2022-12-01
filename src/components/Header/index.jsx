import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
  return (
    
     <header className={styles.header}>
        <button className={styles.btnhome}>
          <Link to={'/'}>Home</Link>
        </button>
        <h1 className={styles.title}>Recuperatorio 2 parcial MCGA</h1>
        <Link to={'/products'}><button className={styles.btnhome}>Ir al CRUD</button></Link>        
        
      </header>
    
  );
}

export default Header;
