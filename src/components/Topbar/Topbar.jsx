import { Link } from 'react-router-dom'
import styles from './Topbar.module.css'

function Topbar({ title, onMenuToggle }) {
  return (
    <header className={styles.topbar}>
      <button
        type="button"
        className={styles.menuBtn}
        onClick={onMenuToggle}
        aria-label="Abrir menu"
      >
        ☰
      </button>
      <h1 className={styles.title}>{title}</h1>
      <Link to="/contato" className={styles.cta}>
        Agendar aula
      </Link>
    </header>
  )
}

export default Topbar
