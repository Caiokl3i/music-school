import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SideBar from '../components/Sidebar/SideBar'
import Topbar from '../components/Topbar/Topbar'
import styles from './MainLayout.module.css'

const pageTitles = {
  '/': 'Início',
  '/cursos': 'Cursos',
  '/galeria': 'Galeria',
  '/contato': 'Contato',
}

function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const title = pageTitles[pathname] ?? 'Caio Music'

  return (
    <div className={styles.app}>
      <SideBar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className={styles.main}>
        <Topbar title={title} onMenuToggle={() => setMenuOpen((o) => !o)} />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
