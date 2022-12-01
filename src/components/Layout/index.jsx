import React from 'react';
import styles from './layout.module.css';
import { Link } from 'react-router-dom';

const Layout = ({children}) => {
  return (
    <div>
      <header className={styles.header}>
        <button className={styles.btnhome}>
          <Link to={'/'}>Ir al Home</Link>
        </button>
        <h1 className={styles.title}>Recuperatorio 2 parcial MCGA</h1>
        <Link to={'/products'}><button>Ir al CRUD</button></Link>
        <button>
          <a 
          href="https://github.com/alemassad/recuperaMCGA" 
          target={'_blank'} 
          rel="noreferrer">
              GitHub Repo
          </a>
        </button>
        
      </header>
      <div className={styles.content}>
      {children}
      
      </div>
    </div>
  );
}

export default Layout