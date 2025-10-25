import logo from '../../assets/logo.png'
import styles from './SideBar.module.css'

const SideBar = () => {
    return (
        <aside className={styles.sidebar}>
            <img src={logo} className={styles.logo} alt="oasjdboabds" />

            <nav className={styles.menu}>
                <div className={styles.menutop}>
                    <div className={styles.menuItem}>Home</div>
                    <div className={styles.menuItem}>Cursos</div>
                    <div className={styles.menuItem}>Músicas</div>
                    <div className={styles.menuItem}>Professores</div>
                </div>
                <div>
                    <div className={styles.menuItem}>
                        Mensagens <span className={styles.messages}>5</span>
                    </div>
                    <div className={styles.menuItem}>Configurações</div>
                </div>
            </nav>
        </aside>
    )
}

export default SideBar
