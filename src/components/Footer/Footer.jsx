import { Link } from 'react-router-dom'
import { site } from '../../data/site'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.brand}>{site.name}</p>
      <p className={styles.tagline}>{site.tagline}</p>
      <nav className={styles.links}>
        <Link to="/">Início</Link>
        <Link to="/cursos">Cursos</Link>
        <Link to="/galeria">Galeria</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      <p className={styles.copy}>
        © {new Date().getFullYear()} {site.name} — Desenvolvido por Caio Victor
      </p>
    </footer>
  )
}

export default Footer
