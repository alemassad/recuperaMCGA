import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.main}>
        <div className={styles.app}>
          <p>Alumno: Luis Alejando Massad</p>
        </div>
        <div className={styles.app}>
        <button>
          <a 
          href="https://github.com/alemassad/recuperaMCGA" 
          target={'_blank'} 
          rel="noreferrer">
              GitHub Repo
          </a>
        </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
