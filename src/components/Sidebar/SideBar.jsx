import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styles from './SideBar.module.css'

const navItems = [
  { to: '/', label: 'Início', end: true },
  { to: '/cursos', label: 'Cursos' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/contato', label: 'Contato' },
]

function SideBar({ open, onClose }) {
  return (
    <>
      <div
        className={`${styles.overlay} ${open ? styles.overlayVisible : ''}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''}`}>
        <NavLink to="/" className={styles.logoLink} onClick={onClose}>
          <img src={logo} className={styles.logo} alt="Caio Music" />
        </NavLink>

        <nav className={styles.menu}>
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `${styles.menuItem} ${isActive ? styles.active : ''}`
              }
              onClick={onClose}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <p className={styles.sidebarNote}>Aulas presenciais e online</p>
      </aside>
    </>
  )
}

export default SideBar
