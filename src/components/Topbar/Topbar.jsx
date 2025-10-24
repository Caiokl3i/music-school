import styles from './Topbar.module.css'

const Topbar = () => {
    return (
        <div className={styles.topbar}>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Pesquisa" />
            </div>
            <div className={styles.profile}>👤</div>
        </div>
    )
}

export default Topbar
